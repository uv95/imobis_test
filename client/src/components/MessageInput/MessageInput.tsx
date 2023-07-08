import Image from 'next/image';
import style from './MessageInput.module.scss';
    
interface MessageInputProps {
    icon: string, 
    title: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, 

}
    
export const MessageInput = ({ icon, title,onChange}: MessageInputProps) => {
    return (
        <div className={style.MessageInput}>
            <label htmlFor="text">
                <Image src={icon} width='30' height='30' alt='icon'/>
                {title}
            </label>
            <textarea onChange={onChange} id="text" cols={30} rows={8}></textarea>
        </div>
    );
};