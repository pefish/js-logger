import * as log4js from "log4js";

export interface ILogger {
  getLevel(): string;

  debug(data: any): void;
  info(data: any): void;
  warn(data: any): void;
  error(data: any): void;
}

export class Logger implements ILogger {
  private level: string;
  private log4js: log4js.Logger;

  constructor() {
    this.level = process.env["LOG_LEVEL"] || "info";
    log4js.configure({
      appenders: { console: { type: "console" } },
      categories: { default: { appenders: ["console"], level: this.level } },
    });
    this.log4js = log4js.getLogger();
  }

  getLevel(): string {
    return this.level;
  }

  debug(data: any): void {
    this.log4js.debug(data);
  }
  info(data: any): void {
    this.log4js.info(data);
  }
  warn(data: any): void {
    this.log4js.warn(data);
  }
  error(data: any): void {
    this.log4js.error(data);
  }
}
