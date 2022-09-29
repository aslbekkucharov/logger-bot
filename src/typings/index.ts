export interface MessageToLog {
    message: string
}

export interface TelegramMessageObject {
    message_id: number,
    from: TelegramUserObject,
    sender_chat: TelegramChatObject,
    date: number,
    chat: TelegramChatObject,
    forward_from: TelegramUserObject,
    forward_from_chat: TelegramChatObject,
    forward_from_message_id: number,
    forward_signature: string,
    forward_sender_name: string,
    forward_date: number,
    is_automatic_forward: boolean,
    via_bot: TelegramUserObject,
    media_group_id: string,
    author_signature: string,
    text: string,
    entities: TelegramMessageEntityObject[],
}

export interface TelegramUserObject {
    id: number,
    is_bot: boolean,
    username: string,
    last_name: string,
    first_name: string,
    is_premium: boolean,
    language_code: string,
    can_join_groups: boolean,
    supports_inline_queries: boolean,
    added_to_attachment_menu: boolean,
    can_read_all_group_messages: boolean
}

export interface TelegramChatObject {
    id: number,
    type: string,
    title: string,
    user_name: string,
    last_name: string,
    photo: TelegramChatPhotoObject,
    bio: string,
    has_private_forwards: boolean,
    has_restricted_voice_and_video_messages: boolean,
    join_to_send_messages: boolean,
    join_by_request: boolean,
    description: string,
    invite_link: string,
    pinned_message: TelegramMessageObject,
    permissions: TelegramChatPermissionsObject,
    slow_mode_delay: number,
    message_auto_delete_time: number,
    has_protected_content: boolean,
    sticker_set_name: string,
    can_set_sticker_set: boolean,
    linked_chat_id: number,
    location: TelegramChatLocationObject

}

export interface TelegramChatPhotoObject {
    small_file_id: string,
    small_file_unique_id: string,
    big_file_id: string,
    big_file_unique_id: string
}

export interface TelegramChatPermissionsObject {
    can_send_messages: boolean,
    can_send_media_messages: boolean,
    can_send_polls: boolean,
    can_send_other_messages: boolean,
    can_add_web_page_previews: boolean,
    can_change_info: boolean,
    can_invite_users: boolean,
    can_pin_messages: boolean
}

export interface TelegramChatLocationObject {
    location: TelegramLocationObject,
    address: string
}

export interface TelegramLocationObject {
    longitude: number,
    latitude: number,
    horizontal_accuracy: number,
    live_period: number,
    heading: number,
    proximity_alert_radius: number
}

export interface TelegramMessageEntityObject {
    type: string,
    offset: number,
    length: number,
    url: string,
    user: TelegramUserObject,
    language: string,
    custom_emoji_id: string
}