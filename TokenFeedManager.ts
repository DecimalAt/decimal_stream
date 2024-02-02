// TokenFeedManager.ts

export class TokenFeedManager {
  private idToTokenMap: Map<number, string>;
  private tokenToIdMap: Map<string, number>;

  constructor() {
    this.idToTokenMap = new Map<number, string>();
    this.tokenToIdMap = new Map<string, number>();

    // Initialize with default tokens
    this.addToken(1, "btc");
    this.addToken(2, "eth");
  }

  addToken(id: number, tokenName: string): void {
    this.idToTokenMap.set(id, tokenName);
    this.tokenToIdMap.set(tokenName, id);
  }

  getTokenNameById(id: number): string | undefined {
    return this.idToTokenMap.get(id);
  }

  getIdByTokenName(tokenName: string): number | undefined {
    return this.tokenToIdMap.get(tokenName);
  }

  getAllTokens(): IterableIterator<[number, string]> {
    return this.idToTokenMap.entries();
  }

  isTokenAvailable(tokenName: string): boolean {
    return this.tokenToIdMap.has(tokenName);
  }
}
