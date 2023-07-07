import { Dispatch, SetStateAction } from 'react';
import { Form } from '../Form/Form';
import style from './NewTemplate.module.scss';
    
interface NewTemplateProps {
    setAddNewTemplate: Dispatch<SetStateAction<boolean>>
}
    
export const NewTemplate = ({ setAddNewTemplate }: NewTemplateProps) => {
    return (
        <div className={style.NewTemplate}>
            <h1>Новый шаблон</h1>
            <Form closeNewTemplate={()=>setAddNewTemplate(false)}/>
        </div>
    );
};