import Button from '../Button/Button';
import style from './Sidebar.module.scss';
    
interface SidebarProps {
   active: string;
   setActive: React.Dispatch<React.SetStateAction<string>>;
}
    
export const Sidebar = ({  active, setActive }: SidebarProps) => {
    return (
        <nav className={style.Sidebar}>
            <Button 
                btnType='clear' 
                isActive={active === 'channels'}
                onClick={() => setActive('channels')}
            >
                Мои каналы
            </Button>
            <Button 
                btnType='clear' 
                isActive={active === 'templates'}
                onClick={() => setActive('templates')}
            >
                Мои шаблоны
            </Button>
        </nav>
    );
};