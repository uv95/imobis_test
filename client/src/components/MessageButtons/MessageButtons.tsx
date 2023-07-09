import { IInlineKeyboard, IMessageButton, IStandardKeyboard } from '@/utils/types';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';
import Button from '../Button/Button';
import DeleteItem from '../DeleteItem/DeleteItem';
import AddButtonText from './AddButtonText';
import AddLink from './AddLink';
import style from './MessageButtons.module.scss';
    
interface MessageButtonsProps {
  buttons: IMessageButton[],
  setButtons: Dispatch<SetStateAction<IMessageButton[]>>,
  settings: IInlineKeyboard | IStandardKeyboard
}
    
export const MessageButtons = ({ buttons, setButtons, settings }: MessageButtonsProps) => {
    const [editBtn, setEditBtn]=useState(false);
    const [showAddBtn, setShowAddBtn]=useState(true);
    const [btnData,setBtnData]=useState<IMessageButton>({
        text: '',
        isLink: false,
        link: ''
    })
    const addNewButton = () =>{
        if(btnData.text)
        { setButtons([...buttons, btnData])
            setEditBtn(false)
            setShowAddBtn(true)}
    }
    const deleteButton = (text:string) =>{
        setButtons(buttons.filter(btn=>btn.text!==text))
    }

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setBtnData({
            ...btnData,
            [e.target.id]: e.target.id==='isLink'?!btnData.isLink :e.target.value
        })
    }

    return (
        <div>
            <div className={style.messageButtons}>
                {buttons.map(btn=>(
                    <div key={btn.text} className={style.button}>
                        <Button btnType='gray'>
                            {btn.isLink ? 
                                <Link href={btn.link}>🔗 {btn.text}</Link> : 
                                btn.text}
                        </Button>
                        <DeleteItem onDelete={()=>deleteButton(btn.text)}/>
                    </div>
                )) 
                }
                {settings.maxButtons!== buttons.length && showAddBtn&&<Button btnType='add' onClick={()=>{
                    setEditBtn(true)
                    setShowAddBtn(false)
                }}>+ Добавить кнопку {settings.maxButtons>0&&`(${settings.maxButtons - buttons.length})`}</Button>}
            </div>

            {editBtn && <div className={style.addButtonInput}>
                <AddButtonText onClick={()=>{
                    setEditBtn(false)
                    setShowAddBtn(true)
                }} onChange={onChange} settings={settings} addNewButton={addNewButton}/>

                {settings.supportsLinks && <AddLink btnData={btnData} onChange={onChange}/>}
            </div>}
        </div>
    );
};