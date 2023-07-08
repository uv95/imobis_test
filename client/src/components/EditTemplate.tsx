import { ChannelNames, IMessage } from '@/utils/types';
import { Dispatch, SetStateAction } from 'react';
import { Form } from './Form/Form';
    
interface EditTemplateProps {
    setEditTemplate: Dispatch<SetStateAction<boolean>>
    messageData: IMessage
    channelName: ChannelNames
}
    
export const EditTemplate = ({ setEditTemplate,messageData,channelName }: EditTemplateProps) => {
    return (
        <div >
            <h1>Редактировать шаблон</h1>
            <Form closeForm={()=>setEditTemplate(false)} isEdit messageData={messageData} channelName={channelName}/>
        </div>
    );
};