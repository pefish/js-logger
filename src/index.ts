import * as log4js from "log4js";

export interface ILogger {
  getLevel(): string;

  debug(message: any, ...args: any[]): void;
  info(message: any, ...args: any[]): void;
  warn(message: any, ...args: any[]): void;
  error(message: any, ...args: any[]): void;
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

  debug(message: any, ...args: any[]): void {
    this.log4js.debug(message, ...args);
  }
  info(message: any, ...args: any[]): void {
    this.log4js.info(message, ...args);
  }
  warn(message: any, ...args: any[]): void {
    this.log4js.warn(message, ...args);
  }
  error(message: any, ...args: any[]): void {
    this.log4js.error(message, ...args);
  }
}
