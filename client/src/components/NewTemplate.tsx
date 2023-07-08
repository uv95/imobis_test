import { Dispatch, SetStateAction } from 'react';
import { Form } from './Form/Form';
    
interface NewTemplateProps {
    setAddNewTemplate: Dispatch<SetStateAction<boolean>>
}
    
export const NewTemplate = ({ setAddNewTemplate }: NewTemplateProps) => {
    return (
        <div >
            <h1>Новый шаблон</h1>
            <Form closeForm={()=>setAddNewTemplate(false)}/>
        </div>
    );
};