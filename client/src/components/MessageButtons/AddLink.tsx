import { IMessageButton } from '@/utils/types';
import React from 'react'
import style from './MessageButtons.module.scss';

type Props = {btnData: IMessageButton,onChange:(e: React.ChangeEvent<HTMLInputElement>) => void}

const AddLink = ({btnData,onChange}: Props) => {
    return (
        <div className={style.addBtnLink}>
            <div className={style.checkbox}>
                <input required type="checkbox" id='isLink' checked={btnData.isLink} onChange={onChange}/>
                <label htmlFor="isLink">Ссылка</label>
            </div>
            {btnData.isLink &&
            <input onChange={onChange} type="text" id='link' placeholder='Ссылка'/>
            }
        </div>
    )
}

export default AddLink