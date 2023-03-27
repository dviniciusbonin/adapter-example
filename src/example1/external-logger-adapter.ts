import { Logger } from "./interfaces/logger";
import { ExternalLogger } from "./interfaces/external-logger";

// Adaptador que converte chamadas da interface Logger na interface do sistema de terceiros
export class ExternalLoggerAdapter implements Logger {
  private externalLogger: ExternalLogger;

  constructor(externalLogger: ExternalLogger) {
    this.externalLogger = externalLogger;
  }
  log(message: string): void {
    console.log(`Convertendo log para sistem externo: ${message}`);
    this.externalLogger.logMessage(message);
  }
}
