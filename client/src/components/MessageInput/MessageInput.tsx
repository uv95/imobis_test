import Image from 'next/image';
import style from './MessageInput.module.scss';
    
interface MessageInputProps {
    icon: string, 
    title: string
}
    
export const MessageInput = ({ icon, title }: MessageInputProps) => {
    return (
        <div className={style.MessageInput}>
            <label htmlFor="message">
                <Image src={icon} width='30' height='30' alt='icon'/>
                {title}
            </label>
            <textarea name="message" id="message" cols={30} rows={8}></textarea>
        </div>
    );
};