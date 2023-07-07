import { Container } from '@/components/Container/Container'
import { getAllChannels } from '@/utils/api';
import { Suspense } from 'react';

import style from './page.module.css'


export default async function Home() {
    const channels = await getAllChannels()
  
    return (
        <main className={style.main}>
            <Suspense fallback={<div>Loading...</div>}>
                <Container channels={channels}/>
            </Suspense>
        </main>
    )
}


