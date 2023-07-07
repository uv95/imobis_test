import style from './Main.module.scss';
    
interface MainProps {
    children:React.ReactNode
}
    
export const Main = ({  children}: MainProps) => {
return (
 <div className={style.Main}>
   {children}
 </div>
);
};