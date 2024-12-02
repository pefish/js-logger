import * as log4js from "log4js";

export interface ILogger {
  getLevel(): string;
  getName(): string;

  debug(message: any, ...args: any[]): void;
  info(message: any, ...args: any[]): void;
  warn(message: any, ...args: any[]): void;
  error(message: any, ...args: any[]): void;
}

export class Logger implements ILogger {
  private name: string;
  private level: string;
  private log4js: log4js.Logger;

  constructor(
    name: string = "",
    level: string = process.env["LOG_LEVEL"] || "info"
  ) {
    this.name = name;
    this.level = level;
    log4js.configure({
      appenders: { console: { type: "console" } },
      categories: { default: { appenders: ["console"], level: this.level } },
    });
    this.log4js = log4js.getLogger();
  }

  getLevel(): string {
    return this.level;
  }

  getName(): string {
    return this.name;
  }

  debug(message: any, ...args: any[]): void {
    this.log4js.debug(
      this.name ? `[${this.name}]: ${message}` : message,
      ...args
    );
  }
  info(message: any, ...args: any[]): void {
    this.log4js.info(
      this.name ? `[${this.name}]: ${message}` : message,
      ...args
    );
  }
  warn(message: any, ...args: any[]): void {
    this.log4js.warn(
      this.name ? `[${this.name}]: ${message}` : message,
      ...args
    );
  }
  error(message: any, ...args: any[]): void {
    this.log4js.error(
      this.name ? `[${this.name}]: ${message}` : message,
      ...args
    );
  }
}
