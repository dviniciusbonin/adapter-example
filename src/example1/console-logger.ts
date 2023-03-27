import { Logger } from "./interfaces/logger";

// Implementação da nossa classe de Logger
export class ConsoleLogger implements Logger {
    log(message: string): void {
      console.log(message);
    }
  }