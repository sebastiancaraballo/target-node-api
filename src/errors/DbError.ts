export default class DbError extends Error {
    public statusCode: number;
    public message: string;
    public detail: string;

    constructor(statusCode: number, message: string, detail: string) {
      super(message);
      this.statusCode = statusCode;
      this.detail = detail;
    }
  }
