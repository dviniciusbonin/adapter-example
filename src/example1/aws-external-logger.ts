// Sistema de terceiros que queremos usar
import { ExternalLogger } from "./interfaces/external-logger";

export class AwsExternalLogger implements ExternalLogger {
  private readonly blue = "\u001b[34m";
  private readonly reset = '\u001b[0m';
  logMessage(msg: string): void {
    console.log(this.blue + `Log para sistema externo: ${msg}` + this.reset);
  }
}
