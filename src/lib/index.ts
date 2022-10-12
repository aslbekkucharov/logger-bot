import { Telegram } from './../api/telegram.api';
import { LoggerCredentials, MessageToLog, TelegramMessageObject } from './../typings/index';

export class Logger {
    private TOKEN: string | undefined
    private CHAT_ID: string | number | undefined
    TELEGRAM_API

    constructor(credentials: LoggerCredentials) {
        this.TOKEN = credentials.BOT_TOKEN
        this.CHAT_ID = credentials.CHAT_ID
        this.TELEGRAM_API = new Telegram({ BOT_TOKEN: this.TOKEN, CHAT_ID: this.CHAT_ID })
    }

    async logMessage({ message }: MessageToLog): Promise<TelegramMessageObject> {
        try {
            const { data: response } = await this.TELEGRAM_API.sendMessage(message)

            return {
                message_id: response.message_id,
                from: response.from,
                sender_chat: response.sender_chat,
                date: response.date,
                chat: response.chat,
                via_bot: response.via_bot,
                media_group_id: response.media_group_id,
                author_signature: response.author_signature,
                text: response.text
            }
        } catch (e) {
            console.log(e)
            throw Error('Cannot use sendMessage function')
        }
    }
}