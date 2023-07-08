import { ChannelNames } from "./types";
import vk from '../assets/icons/vk.svg';
import telegram from '../assets/icons/telegram.svg';
import whatsapp from '../assets/icons/whatsapp.svg';
import sms from '../assets/icons/sms.svg';

export  const channelsWithIcons: {name:ChannelNames,icon:string}[] = [{name:ChannelNames.TELEGRAM, icon:telegram },{name:ChannelNames.SMS, icon:sms },{name:ChannelNames.WHATSAPP, icon:whatsapp },{name:ChannelNames.VKONTAKTE, icon:vk }
];