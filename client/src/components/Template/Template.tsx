import { IMessage } from '@/utils/types';
import Image from 'next/image';
import trash from '../../assets/icons/trash.svg';
import edit from '../../assets/icons/edit.svg';
import style from './Template.module.scss';
import Button from '../Button/Button';
    
interface TemplateProps {
  className?: string;
  message: IMessage
}
    
export const Template = ({ className,message }: TemplateProps) => {
    return (
        <div className={style.template}>
            <p className={style.title}>{message.title}</p>
            <p className={style.text}>{message.text}</p>
            <div className={style.buttons}>
                <Button >
                    <Image src={trash} width='20' height='20' alt=''/>
                </Button>
                <Button >
                    <Image src={edit} width='20' height='20' alt=''/>
                </Button>

            </div>
        </div>
    );
};