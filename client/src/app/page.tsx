'use client'

import { Channels } from '@/components/Channels/Channels';
import { Main } from '@/components/Main/Main'
import { NewTemplate } from '@/components/NewTemplate/NewTemplate';
import { Sidebar } from '@/components/Sidebar/Sidebar'
import { useState } from 'react';
import style from './page.module.css'

export default function Home() {
    const [active, setActive] = useState('channels');

    return (
        <main className={style.main}>
            <Sidebar active={active} setActive={setActive}/>
            <Main>
                {active==='channels' ? <Channels/> : <NewTemplate/>}
            </Main>
        </main>
    )
}
