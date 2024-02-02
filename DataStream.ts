import { EventEmitter } from "events";

export interface TokenData {
  id: number;
  tokenName: string;
  data: string;
}

class DataStream extends EventEmitter {
  private feedMap: Map<number, TokenData>; // Map now uses ID as the key

  constructor() {
    super();
    this.feedMap = new Map<number, TokenData>();
  }

  // Method to update data
  updateData(id: number, tokenName: string, data: any): void {
    const tokenData: TokenData = { id, tokenName, data };
    this.feedMap.set(id, tokenData);
    this.emit("data", tokenData);
  }

  // Method to check if token is available
  isTokenAvailable(tokenName: string): boolean {
    for (let tokenData of this.feedMap.values()) {
      if (tokenData.tokenName === tokenName) {
        return true;
      }
    }
    return false;
  }

  // Method to get data by ID
  getDataById(id: number): TokenData | undefined {
    return this.feedMap.get(id);
  }
}

export default DataStream;
