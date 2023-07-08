import { MessageInput } from '../MessageInput/MessageInput';
import style from './Form.module.scss';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import { ChannelNames, IMessage, IMessageButton, Keyboard } from '@/utils/types';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { channelsWithIcons } from '@/utils/channelsWithIcons';
import { lowercaseFirstLetter } from '@/utils/lowercaseFirstLetter';
import { useChannelsContext } from '@/context/channelsContext';
import { MessageButtons } from '../MessageButtons/MessageButtons';
import { useMutation } from 'react-query';
import { addMessage } from '@/utils/api';
    
interface FormProps {
    closeNewTemplate: () => void
}
    
export const Form = ({ closeNewTemplate }: FormProps) => {
    const {channels} = useChannelsContext();
    const [selectedChannel, setSelectedChannel] = useState<ChannelNames>(channels[0].name)
    const currentChannel = channels.find(c=>c.name===selectedChannel);

    const [formData, setFormData]=useState<IMessage>({
        title: 'Новый шаблон',
        text: '',
        buttons: [],
        keyboard: Keyboard.STANDARD,
        id: ''
    })
    const [buttons, setButtons] = useState<IMessageButton[]>([])

    const addNewMessage = useMutation({
        mutationFn: ()=>addMessage(selectedChannel, currentChannel?.id!,
            formData
        ),
        // onSuccess: ()=>queryClient.invalidateQueries('channels')
    })

    useEffect(()=>{
        setFormData({
            ...formData, buttons
        })
    }, [buttons])


    const onSubmit = ()=>{}

    const onChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setFormData({
            ...formData,
            buttons, 
            [e.target.id]:e.target.value
        })
    }

    const onSelect = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        setSelectedChannel(lowercaseFirstLetter(e.target.value) as ChannelNames)
    }

    return (
        <form className={style.Form}>
            <div className={style.inputGroup}>
                <label htmlFor="title">Название</label>
                <input onChange={onChange} id='title' type="text" defaultValue={formData.title}/>
            </div>
            
            <div className={style.selectGroup}>
                <select onChange={onSelect} name="chooseChannels" id="chooseChannels">
                    {channels.map(channel=>(
                        <option key={channel.name} defaultValue='whatsapp'>{capitalizeFirstLetter(channel.name)}</option>
                    ))}
                </select>
            </div>

            <MessageInput onChange={onChange} icon={channelsWithIcons.find(c=>c.name===selectedChannel)!.icon} title={capitalizeFirstLetter(selectedChannel)}/>

            <div className={style.radioGroup}>
                {Object.values(Keyboard).map(val=>(
                    <div key={val} className={style.radioItem}>
                        <input onChange={onChange} checked={formData.keyboard===val} id='keyboard' type="radio" value={val}/>
                        <label htmlFor='keyboard'>{capitalizeFirstLetter(val)}</label>
                    </div>
                ))}
            </div>

            {currentChannel!.keyboard && <MessageButtons settings={channels.find(channel=>channel.name===selectedChannel)!.keyboard![formData.keyboard as Keyboard]} setButtons={setButtons} buttons={buttons}
            />}

            <Button className={style.saveBtn} btnType='save' onClick={()=>{
                addNewMessage.mutate()
                closeNewTemplate()
            }}>Сохранить</Button>
        </form>
    );
};