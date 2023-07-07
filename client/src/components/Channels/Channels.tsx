'use client';

import style from './Channels.module.scss';
import vk from '../../assets/icons/vk.svg';
import telegram from '../../assets/icons/telegram.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';
import sms from '../../assets/icons/sms.svg';
import {  useChannelsContext } from '@/context/channelsContext';
import { Channel } from './Channel';
import { ChannelNames } from '@/utils/types';
    
const Channels = () => {
    const {channels} = useChannelsContext();

    const channelsWithIcons: {name:ChannelNames,icon:string}[]=[{name:ChannelNames.TELEGRAM, icon:telegram },{name:ChannelNames.SMS, icon:sms },{name:ChannelNames.WHATSAPP, icon:whatsapp },{name:ChannelNames.VKONTAKTE, icon:vk }];
    
    return (
        <div className={style.Channels}>
            <section className={style.myChannelsSection}>
                <h1>Мои каналы</h1>
                <div className={style.myChannels}>
                    {channels.map(channel=>(
                        <Channel key={channel.name} channel={{name:channel.name,icon:channelsWithIcons.find(c=>c.name===channel.name)!.icon, id:channel.id}} mode='delete'/>
                    ))}
                    
                </div>
            </section>
            <section className={style.allChannelsSection}>
                <h1>Добавить каналы</h1>
                <div className={style.allChannels}>
                    {channelsWithIcons.filter(c=>!channels.some(item=>item.name===c.name)).map(channel=>(
                        <Channel key={channel.name} channel={channelsWithIcons.find(c=>c.name===channel.name)!}
                            className={style.addChannel}
                            mode='add'
                        />
                    ))}
                </div>
            </section>
           
        </div>
    );
};

export default Channels