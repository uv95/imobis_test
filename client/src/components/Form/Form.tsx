import { MessageInput } from '../MessageInput/MessageInput';
import style from './Form.module.scss';
import telegram from '../../assets/icons/telegram.svg';
import Button from '../Button/Button';
    
interface FormProps {
    closeNewTemplate: () => void
}
    
export const Form = ({ closeNewTemplate }: FormProps) => {
    return (
        <form className={style.Form}>
            <div className={style.inputGroup}>
                <label htmlFor="templateTitle">Название</label>
                <input id='templateTitle' type="text" defaultValue='Новый шаблон'/>
            </div>
            <div className={style.selectGroup}>
                <select name="chooseChannels" id="chooseChannels">
                    {['1', '2'].map(option=>(
                        <option key={option}>{option}</option>
                    ))}
                </select>
            </div>
            <MessageInput icon={telegram} title='Telegram'/>
            <Button onClick={closeNewTemplate}>Сохранить</Button>
        </form>
    );
};