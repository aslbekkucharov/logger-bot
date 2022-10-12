import { Logger } from './lib/index';
import * as dotenv from 'dotenv'
dotenv.config()

const loggerCredentials = {
    BOT_TOKEN: process.env.LOGGER_BOT_TOKEN,
    CHAT_ID: process.env.LOGS_CHAT_ID
}

const logger = new Logger(loggerCredentials)
logger.logMessage({ message: 'Message' })