export enum ChannelNames {
    WHATSAPP='whatsapp',
    TELEGRAM = 'telegram',
    SMS = 'sms',
    VKONTAKTE = 'vkontakte',
}

export enum Keyboard {
    STANDARD='standard',
    INLINE = 'inline'
}

export interface IMessageButton{
    text: string,
    isLink: boolean,
    link:string
}

export interface IStandardKeyboard{
    maxButtons: number,   
    maxTextLength: number,
    supportsLinks:boolean
}

export interface IInlineKeyboard{
    maxButtons: number,   
    maxTextLength: number,
    supportsLinks: boolean
}

export interface IKeyboardSettings {
    standard: IStandardKeyboard,
    inline: IInlineKeyboard
        }

export interface IMessage {
    title: string,
    text: string,
    keyboard?: Keyboard,
    buttons?: IMessageButton[]
}

export interface IChannel{
    name: ChannelNames,
    keyboard? : IKeyboardSettings,
    id: string,
    messages : IMessage[]
}