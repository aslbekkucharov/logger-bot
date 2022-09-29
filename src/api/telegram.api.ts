import { TelegramMessageObject } from './../typings/index';
import { createHttpClient } from "../shared";
import { AxiosResponse } from 'axios';
import dotenv from 'dotenv'

dotenv.config()

const http = createHttpClient({
    baseURL: `https://api.telegram.org/bot${process.env.BOT_TOKEN}`
})

export function sendMessage(message: string): Promise<AxiosResponse<TelegramMessageObject>> {
    return http.get('/sendMessage',  {
        params: {
            chat_id: process.env.CHAT_ID,
            text: message
        }
    })
}