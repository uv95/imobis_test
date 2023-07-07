'use client'

import { Channels } from '@/components/Channels/Channels';
import { Main } from '@/components/Main/Main'
import { MyTemplates } from '@/components/MyTemplates/MyTemplates';
import { Sidebar } from '@/components/Sidebar/Sidebar'
import { useState } from 'react';
import style from './page.module.css'

export default function Home() {
    const [active, setActive] = useState('channels');

    return (
        <main className={style.main}>
            <Sidebar active={active} setActive={setActive}/>
            <Main>
                {active==='channels' ? <Channels/> : <MyTemplates/>}
            </Main>
        </main>
    )
}
