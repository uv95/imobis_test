'use client';

import style from './Channels.module.scss';
import Image from 'next/image';
import { ChannelNames } from '@/utils/types';
import { addChannel, deleteChannel } from '@/utils/api';
import { classNames } from '@/utils/classNames';
import {useMutation,useQueryClient} from 'react-query';
import DeleteItem from '../DeleteItem/DeleteItem';

interface ChannelProps {
  channel: {name:ChannelNames,icon:string, id?:string};
  className?: string;
  mode:'delete'|'add'
}
export const Channel = ({ channel, className,mode }: ChannelProps) => {
    const queryClient = useQueryClient();

    const removeChannel = useMutation({
        mutationFn: ()=>deleteChannel(channel.name, channel.id!),
        onSuccess: ()=>queryClient.invalidateQueries('channels')
    })
    const addNewChannel = useMutation({
        mutationFn: ()=>addChannel(channel.name),
        onSuccess: ()=> queryClient.invalidateQueries('channels')
    })

    return (
        <div className={classNames(
            style.channel,
            {}, [className||'']
        )}  onClick={()=>mode==='add' && addNewChannel.mutate()}
        >
            {channel.id && <DeleteItem onDelete={()=>removeChannel.mutate()}/>
            }
            <Image src={channel.icon} width='60' height='60' alt={channel.name}/>
            <p>{channel.name[0].toUpperCase()+channel.name.slice(1)}</p>
        </div>
                   
    );
};