import { MessageInput } from '../MessageInput/MessageInput';
import style from './Form.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';
import { ChannelNames } from '@/utils/types';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { channelsWithIcons } from '@/utils/channelsWithIcons';
import { lowercaseFirstLetter } from '@/utils/lowercaseFirstLetter';
import { useChannelsContext } from '@/context/channelsContext';
    
interface FormProps {
    closeNewTemplate: () => void
}
    
export const Form = ({ closeNewTemplate }: FormProps) => {
    const {channels} = useChannelsContext();
    const [selectedChannel, setSelectedChannel]=useState<ChannelNames>(channels[0].name)
    const [text, setText]=useState<string>('')

    const onSubmit = ()=>{}

    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setText(e.target.value)
    }

    const onSelect = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        setSelectedChannel(lowercaseFirstLetter(e.target.value) as ChannelNames)
    }

    return (
        <form onSubmit={onSubmit} className={style.Form}>
            <div className={style.inputGroup}>
                <label htmlFor="templateTitle">Название</label>
                <input onChange={onChange} id='templateTitle' type="text" defaultValue='Новый шаблон'/>
            </div>
            
            <div className={style.selectGroup}>
                <select onChange={onSelect} name="chooseChannels" id="chooseChannels">
                    {channels.map(channel=>(
                        <option key={channel.name} defaultValue='whatsapp'>{capitalizeFirstLetter(channel.name)}</option>
                    ))}
                </select>
            </div>

            <MessageInput icon={channelsWithIcons.find(c=>c.name===selectedChannel)!.icon} title={capitalizeFirstLetter(selectedChannel)}/>

            <Button onClick={closeNewTemplate}>Сохранить</Button>
        </form>
    );
};