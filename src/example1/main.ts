import { AwsExternalLogger } from "./aws-external-logger";
import { ConsoleLogger } from "./console-logger";
import { ExternalLogger } from "./interfaces/external-logger";
import { Logger } from "./interfaces/logger";
import { ExternalLoggerAdapter } from './external-logger-adapter';

const logger: Logger =   new ExternalLoggerAdapter(new AwsExternalLogger())

function start(logger: Logger) {
    logger.log("Hello, world!");
}


start(logger)