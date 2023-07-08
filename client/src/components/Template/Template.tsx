import { ChannelNames, IMessage } from '@/utils/types';
import Image from 'next/image';
import trash from '../../assets/icons/trash.svg';
import edit from '../../assets/icons/edit.svg';
import style from './Template.module.scss';
import Button from '../Button/Button';
import { Dispatch, SetStateAction, useState } from 'react';
import Modal from '../Modal/Modal';
import { useMutation, useQueryClient } from 'react-query';
import { deleteMessage } from '@/utils/api';
import { EditTemplate } from '../EditTemplate';
    
interface TemplateProps {
  message: IMessage
  channel: ChannelNames
  setEditTemplate: Dispatch<SetStateAction<boolean>>,
  setChannelName: Dispatch<SetStateAction<ChannelNames | undefined>>
  setMessageData: Dispatch<SetStateAction<IMessage | undefined>>
}
    
export const Template = ({ setChannelName,message,channel,setMessageData,setEditTemplate }: TemplateProps) => {
    const [isHovered, setIsHovered]=useState(false)
    const [deleteTemplate, setDeleteTemplate] = useState(false);
    const queryClient = useQueryClient();

    const onDeleteTemplate = useMutation({
        mutationFn: ()=>deleteMessage(channel, message._id!),
        onSuccess: ()=>queryClient.invalidateQueries('channels')
    })

    return (
        <>
            <div className={style.template} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
                <p className={style.title}>{message.title}</p>
                <p className={style.text}>{message.text}</p>
                <div className={`${style.buttons} ${isHovered ? style.buttons_showed : ''}`}>
                    <Button onClick={()=>{
                        setEditTemplate(true)
                        setChannelName(channel)
                        setMessageData(message)
                    }}>
                        <Image src={edit} width='20' height='20' alt='edit'/>
                    </Button>
                    <Button btnType='clear' onClick={()=>setDeleteTemplate(true)}>
                        <Image src={trash} width='20' height='20' alt='delete'/>
                    </Button>
                </div>
            </div>

            {deleteTemplate && <Modal className={style.modal}>
                <p>Вы уверены, что хотите удалить шаблон?</p>
                <div className={style.modalButtons}>
                    <Button btnType='gray' onClick={()=>setDeleteTemplate(false)}>Нет</Button>
                    <Button btnType='gray' onClick={()=>onDeleteTemplate.mutate()}>Да</Button>
                </div>
            </Modal>}
        </>
    );
};