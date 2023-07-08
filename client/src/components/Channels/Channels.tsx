'use client';

import style from './Channels.module.scss';
import {  useChannelsContext } from '@/context/channelsContext';
import { Channel } from './Channel';
import { channelsWithIcons } from '@/utils/channelsWithIcons';
    
const Channels = () => {
    const {channels} = useChannelsContext();
    
    return (
        <div className={style.Channels}>
            <section className={style.myChannelsSection}>
                <h1>Мои каналы</h1>
                <div className={style.myChannels}>
                    {channels.length ? channels.map(channel=>(
                        <Channel key={channel.name} channel={{name:channel.name,icon:channelsWithIcons.find(c=>c.name===channel.name)!.icon, id:channel.id}} mode='delete'/>
                    )) : <p>Список каналов пуст.</p>}
                    
                </div>
            </section>
            {channels.length!==4 && <section className={style.allChannelsSection}>
                <h1>Добавить каналы</h1>
                <div className={style.allChannels}>
                    {channelsWithIcons.filter(c=>!channels.some(item=>item.name===c.name)).map(channel=>(
                        <Channel key={channel.name} channel={channelsWithIcons.find(c=>c.name===channel.name)!}
                            className={style.addChannel}
                            mode='add'
                        />
                    ))}
                </div>
            </section>}
           
        </div>
    );
};

export default Channels