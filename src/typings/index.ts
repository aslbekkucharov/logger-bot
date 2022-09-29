export interface MessageToLog {
    message: string
}

export interface TelegramMessageObject {
    message_id: number,
    from: TelegramUserObject,
    sender_chat: TelegramChatObject,
    date: number,
    chat: TelegramChatObject,
    via_bot: TelegramUserObject,
    media_group_id: string,
    author_signature: string,
    text: string,
}

export interface TelegramUserObject {
    id: number,
    is_bot: boolean,
    username: string,
    last_name: string,
    first_name: string,
}

export interface TelegramChatObject {
    id: number,
    type: string,
    title: string,
    user_name: string,
    last_name: string,
    description: string,
    invite_link: string
}