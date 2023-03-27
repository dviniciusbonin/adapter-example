// Interface do sistema de terceiros que queremos usar
export interface ExternalLogger {
  logMessage(msg: string): void;
}