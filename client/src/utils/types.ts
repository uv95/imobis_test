export enum Keyboard {
    STANDARD='standard',
    INLINE = 'inline'
}

export interface IMessage {
    text: string,
    keyboard : { 
        current: Keyboard,
        standard: { 
                maxButtons: number,   
                maxTextLength: number,
                supportsLinks:boolean
                },
        inline: { 
                maxButtons: number,   
                maxTextLength: number,
                supportsLinks: boolean
                }
            }
}

export interface IChannel{
    name: string,
    id: string,
    messages : IMessage[]
}