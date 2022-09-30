import { sendMessage } from '../api/telegram.api';
import { MessageToLog, TelegramMessageObject } from './../typings/index';

export async function sendLogMessage({ message }: MessageToLog): Promise<TelegramMessageObject> {
    try {
        const { data: response } = await sendMessage(message)

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