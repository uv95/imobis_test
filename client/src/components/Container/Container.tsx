'use client'

import { useChannelsContext } from '@/context/channelsContext';
import {  useEffect, useState } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import style from './Container.module.scss';
import {useQuery} from 'react-query';
import { getAllChannels } from '@/utils/api';
import dynamic from 'next/dynamic';
import { Spinner } from '../Spinner/Spinner';

const Channels = dynamic(()=>import('../Channels/Channels'), 
    {loading:  ()=> <Spinner/>});
const MyTemplates = dynamic(()=>import('../MyTemplates/MyTemplates'), {loading:  ()=> <Spinner/>});

export const Container = () => {
    const {setChannels} = useChannelsContext()
    const [active, setActive] = useState('channels');
    const {data,error, status}=useQuery('channels', ()=>getAllChannels())

    useEffect(()=>{
        if(data) setChannels(data);
    },[data, setChannels])

    return (
        <>
            <Sidebar active={active} setActive={setActive}/>
            <div className={style.content}>
                { status==='loading' ? <Spinner/> :
                    active==='channels' ? <Channels/> : <MyTemplates/>}
            </div>
        </>
    );
};