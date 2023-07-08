import { useChannelsContext } from '@/context/channelsContext';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { channelsWithIcons } from '@/utils/channelsWithIcons';
import Image from 'next/image';
import { useState } from 'react';
import Button from '../Button/Button';
import { NewTemplate } from '../NewTemplate/NewTemplate';
import { Template } from '../Template/Template';
import style from './MyTemplates.module.scss';
    
interface MyTemplatesProps {
 
}
    
const MyTemplates = ({  }: MyTemplatesProps) => {
    const {channels} = useChannelsContext()
    const [addNewTemplate, setAddNewTemplate] = useState(false);
    return (
        <div className={style.MyTemplates}>
            {!addNewTemplate && <>
                <h1>Мои шаблоны</h1>

                {channels.every(channel=>channel.messages.length===0) && <p className={style.empty}>Список шаблонов пуст.</p>}

                {channels.filter(channel=>channel.messages.length).map(channel=>(
                    <div key={channel.id} className={style.channel}>
                        <div className={style.channelName}>
                            <Image src={channelsWithIcons.find(c=>c.name===channel.name)!.icon} width='30' height='30' alt='icon'/>
                            {capitalizeFirstLetter(channel.name)}
                        </div>
                        <div className={style.templates}>
                            {channel.messages.map(message=>(
                                <Template key={message.id} message={message}/>
                            ))}

                        </div>
                    </div>
                ))}

                <Button btnType='add' onClick={()=>setAddNewTemplate(true)}>+ Новый шаблон</Button> 
            </>}

            {addNewTemplate &&  <NewTemplate setAddNewTemplate={setAddNewTemplate}/>}
        </div>
    );
};

export default MyTemplates