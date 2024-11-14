import * as log4js from "log4js";

export interface ILogger {
  getLevel(): string;

  debug(msg: string): void;
  info(msg: string): void;
  warn(msg: string): void;
  error(msg: string): void;
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

  debug(msg: string): void {
    this.log4js.debug(msg);
  }
  info(msg: string): void {
    this.log4js.info(msg);
  }
  warn(msg: string): void {
    this.log4js.warn(msg);
  }
  error(msg: string): void {
    this.log4js.error(msg);
  }
}
