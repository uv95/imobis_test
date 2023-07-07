import { useState } from 'react';
import Button from '../Button/Button';
import { NewTemplate } from '../NewTemplate/NewTemplate';
import style from './MyTemplates.module.scss';
    
interface MyTemplatesProps {
 
}
    
export const MyTemplates = ({  }: MyTemplatesProps) => {
    const [addNewTemplate, setAddNewTemplate] = useState(false);
    return (
        <div className={style.MyTemplates}>
            {!addNewTemplate && <>
                <h1>Мои шаблоны</h1>
                <Button btnType='add' onClick={()=>setAddNewTemplate(true)}>+ Новый шаблон</Button> 
            </>}
            {addNewTemplate &&  <NewTemplate setAddNewTemplate={setAddNewTemplate}/>}
        </div>
    );
};