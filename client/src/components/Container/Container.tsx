'use client'

import { ChannelsContext, ChannelsProvider } from '@/context/channelsContext';
import { useContext, useEffect, useState } from 'react';
import { Channels } from '../Channels/Channels';
import { MyTemplates } from '../MyTemplates/MyTemplates';
import { Sidebar } from '../Sidebar/Sidebar';
import style from './Container.module.scss';
    
interface ContainerProps {
    channels:any
}
    
export const Container = ({channels }: ContainerProps) => {
    const {setChannels} = useContext(ChannelsContext)
    const [active, setActive] = useState('channels');

    useEffect(()=>{
        setChannels(channels)
    },[channels,setChannels])

    return (
        <ChannelsProvider>
            <Sidebar active={active} setActive={setActive}/>
            <div className={style.content}>
                {active==='channels' ? <Channels/> : <MyTemplates/>}
            </div>
        </ChannelsProvider>
    );
};