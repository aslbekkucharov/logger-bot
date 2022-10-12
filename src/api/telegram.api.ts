import { LoggerCredentials, TelegramMessageObject } from './../typings/index';
import { createHttpClient } from "../shared";
import { AxiosResponse, AxiosInstance } from 'axios';

export class Telegram {

    TOKEN: string | undefined
    CHAT_ID: string | number | undefined
    http: AxiosInstance

    constructor(credentials: LoggerCredentials) {
        this.TOKEN = credentials.BOT_TOKEN
        this.CHAT_ID = credentials.CHAT_ID
        this.http = createHttpClient({
            baseURL: `https://api.telegram.org/bot${this.TOKEN}`
        })
    }

    sendMessage(message: string): Promise<AxiosResponse<TelegramMessageObject>> {
        return this.http.get('/sendMessage', {
            params: {
                chat_id: this.CHAT_ID,
                text: message
            }
        })
    }
}