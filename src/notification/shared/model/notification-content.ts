export class Content {
  private readonly content: string;

  constructor(content: string) {
    const isContentLengthValue = this.validateContentLength(content);
    if (!isContentLengthValue) {
      throw new Error('Content length error');
    }
    this.content = content;
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 5 || content.length <= 240;
  }
  get value(): string {
    return this.content;
  }

}