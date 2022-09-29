import { createHttpClient } from "../shared";

const http = createHttpClient({
    baseURL: `https://api.telegram.org/bot${process.env.BOT_TOKEN}`
})

export function sendMessage() {
    return http.get('/sendMessage',  {
        params: {
            chat_id: process.env.CHAT_ID,
            text: 'Message from bot'
        }
    })
}