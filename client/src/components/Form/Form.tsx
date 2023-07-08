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
import { useMutation, useQueryClient } from 'react-query';
import { addMessage, editMessage } from '@/utils/api';
    
interface FormProps {
    closeForm: () => void
    isEdit?:boolean
    messageData?:IMessage
    channelName?:ChannelNames
}
    
export const Form = ({ closeForm,isEdit,messageData,channelName }: FormProps) => {
    const queryClient = useQueryClient();

    const {channels} = useChannelsContext();
    const [selectedChannel, setSelectedChannel] = useState<ChannelNames>(channels[0].name)
    const currentChannel = channels.find(c=>c.name===(isEdit?channelName:selectedChannel));

    const [formData, setFormData]=useState<IMessage>(isEdit? messageData! : {
        title: 'Новый шаблон',
        text: '',
        buttons: [],
        keyboard: Keyboard.STANDARD,
    })
    const [buttons, setButtons] = useState<IMessageButton[]>(isEdit? messageData?.buttons! : [])

    const addNewMessage = useMutation({
        mutationFn: ()=>addMessage(selectedChannel, currentChannel?.id!,
            formData
        ),
        onSuccess: ()=>queryClient.invalidateQueries('channels')
    })
    const editExistingMessage = useMutation({
        mutationFn: ()=>editMessage(channelName!, formData._id!,
            formData
        ),
        onSuccess: ()=>queryClient.invalidateQueries('channels')
    })

    useEffect(()=>{
        setFormData({
            ...formData, buttons
        })
    }, [buttons])

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
        <form onSubmit={()=>{
            isEdit? editExistingMessage.mutate() : addNewMessage.mutate()
            closeForm()
        }} className={style.Form}>
            <div className={style.inputGroup}>
                <label htmlFor="title">Название</label>
                <input onChange={onChange} id='title' type="text" defaultValue={formData.title}/>
            </div>
            
            <div className={style.selectGroup}>
                <select onChange={onSelect} name="chooseChannels" id="chooseChannels" value={channelName} disabled={isEdit}>
                    {channels.map(channel=>(
                        <option key={channel.name} value={channel.name}>{capitalizeFirstLetter(channel.name)}</option>
                    ))}
                </select>
            </div>

            <MessageInput currentText={formData?.text} onChange={onChange} icon={channelsWithIcons.find(c=>c.name===(isEdit? channelName :selectedChannel))!.icon} title={capitalizeFirstLetter(isEdit? channelName! :selectedChannel)}/>

            <div className={style.radioGroup}>
                {Object.values(Keyboard).map(val=>(
                    <div key={val} className={style.radioItem}>
                        <input onChange={onChange} checked={formData.keyboard===val} id='keyboard' type="radio" value={val}/>
                        <label htmlFor='keyboard'>{capitalizeFirstLetter(val)}</label>
                    </div>
                ))}
            </div>

            {currentChannel!.keyboard && 
            <MessageButtons settings={channels.find(channel=>channel.name===selectedChannel)!.keyboard![formData.keyboard as Keyboard]} setButtons={setButtons} buttons={buttons}
            />}

            <Button isSubmit className={style.saveBtn} btnType='save' >Сохранить</Button>
            <Button className={style.saveBtn} onClick={closeForm}>Назад</Button>
        </form>
    );
};