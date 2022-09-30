import { TelegramMessageObject } from './../typings/index';
import { createHttpClient } from "../shared";
import { AxiosResponse } from 'axios';


const http = createHttpClient({
    baseURL: `https://api.telegram.org/bot${process.env.LOGGER_BOT_TOKEN}`
})

export function sendMessage(message: string): Promise<AxiosResponse<TelegramMessageObject>> {
    return http.get('/sendMessage', {
        params: {
            chat_id: process.env.LOGS_CHAT_ID,
            text: message
        }
    })
}