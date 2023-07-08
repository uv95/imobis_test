import { useChannelsContext } from '@/context/channelsContext';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { channelsWithIcons } from '@/utils/channelsWithIcons';
import { ChannelNames, IMessage } from '@/utils/types';
import Image from 'next/image';
import { useState } from 'react';
import Button from '../Button/Button';
import { EditTemplate } from '../EditTemplate';
import { NewTemplate } from '../NewTemplate';
import { Template } from '../Template/Template';
import style from './MyTemplates.module.scss';
    
interface MyTemplatesProps {
 
}
    
const MyTemplates = ({  }: MyTemplatesProps) => {
    const {channels} = useChannelsContext()
    const [addNewTemplate, setAddNewTemplate] = useState(false);
    const [editTemplate, setEditTemplate] = useState(false);
    const [channelName, setChannelName] = useState<ChannelNames>();
    const [messageData, setMessageData] = useState<IMessage>();
    
    return (
        <div className={style.myTemplates}>
            {!addNewTemplate && !editTemplate && <>
                <h1>Мои шаблоны</h1>
                <Button className={style.addTemplateBtn} btnType='add' onClick={()=>setAddNewTemplate(true)}>+ Новый шаблон</Button> 
            
                {channels.every(channel=>channel.messages.length===0) && <p className={style.empty}>Список шаблонов пуст.</p>}

                <div className={style.channelsList}>
                    {channels.filter(channel=>channel.messages.length).map(channel=>(
                        <div key={channel.id} className={style.channel}>
                            <div className={style.channelName}>
                                <Image src={channelsWithIcons.find(c=>c.name===channel.name)!.icon} width='30' height='30' alt='icon'/>
                                {capitalizeFirstLetter(channel.name)}
                            </div>
                            <div className={style.templates}>
                                {channel.messages.map(message=>(
                                    <Template key={message._id} channel={channel.name} message={message}
                                        setEditTemplate={setEditTemplate}
                                        setChannelName={setChannelName}
                                        setMessageData={setMessageData}
                                    />
                                ))}

                            </div>
                        </div>
                    ))}
                </div>

            </>}

            {addNewTemplate &&  <NewTemplate setAddNewTemplate={setAddNewTemplate}/>}
            {editTemplate && channelName && messageData&&<EditTemplate setEditTemplate={setEditTemplate} channelName={channelName} messageData={messageData}/>}
        </div>
    );
};

export default MyTemplates