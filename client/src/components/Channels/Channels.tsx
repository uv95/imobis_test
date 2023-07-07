import style from './Channels.module.scss';
import vk from '../../assets/icons/vk.svg';
import telegram from '../../assets/icons/telegram.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';
import sms from '../../assets/icons/sms.svg';
import Image from 'next/image';


interface ChannelsProps {
  className?: string;
}
    
export const Channels = ({ className }: ChannelsProps) => {
    const channels=[{name:'telegram', icon:telegram },{name:'sms', icon:sms },{name:'whatsapp', icon:whatsapp },{name:'vkontakte', icon:vk }]
    return (
        <div className={style.Channels}>
            <section className={style.myChannelsSection}>
                <h1>Мои каналы</h1>
                <div className={style.myChannels}>
                    <Image src={vk} width='50' height='50' alt='vk'/>
                    <Image src={telegram} width='50' height='50' alt='telegram'/>
                    <Image src={whatsapp} width='50' height='50' alt='whatsapp'/>
                    <Image src={sms} width='50' height='50' alt='sms'/>
                </div>
            </section>
            <section className={style.allChannelsSection}>
                <h1>Добавить каналы</h1>
                <div className={style.allChannels}>
                    <Image src={vk} width='50' height='50' alt='vk'/>
                    <Image src={telegram} width='50' height='50' alt='telegram'/>
                    <Image src={whatsapp} width='50' height='50' alt='whatsapp'/>
                    <Image src={sms} width='50' height='50' alt='sms'/>
                </div>
            </section>
           
        </div>
    );
};