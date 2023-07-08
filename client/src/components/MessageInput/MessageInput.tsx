import Image from 'next/image';
import style from './MessageInput.module.scss';
    
interface MessageInputProps {
    icon: string, 
    title: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, 
    currentText?:string
}
    
export const MessageInput = ({ icon, title,onChange,currentText}: MessageInputProps) => {
    return (
        <div className={style.MessageInput}>
            <label htmlFor="text">
                <Image src={icon} width='30' height='30' alt='icon'/>
                {title}
            </label>
            <textarea required onChange={onChange} defaultValue={currentText|| ''} id="text" cols={30} rows={8}></textarea>
        </div>
    );
};