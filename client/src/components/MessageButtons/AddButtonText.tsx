import { IInlineKeyboard, IStandardKeyboard } from '@/utils/types';
import React from 'react'
import Button from '../Button/Button';
import style from './MessageButtons.module.scss';

type Props = {
    settings: IInlineKeyboard | IStandardKeyboard,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, 
    onClick:()=>void,
    addNewButton:() => void}

const AddButtonText = ({settings,onChange,onClick,addNewButton}: Props) => {
    return (
        <div className={style.addBtnText}>
            <input onChange={onChange} type="text" id='text' placeholder='Текст кнопки...' maxLength={settings.maxTextLength>0 ? settings.maxTextLength:undefined}/>
            <Button btnType='save' onClick={addNewButton}>Добавить</Button>
            <Button btnType='cancel' onClick={onClick}>Отмена</Button>
        </div>
    )
}

export default AddButtonText