import { Container } from '@/components/Container/Container'
import { baseUrl, getAllChannels } from '@/utils/api';
import { Suspense } from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';

import style from './page.module.css'


export default async function Home() {
    // const channels = await getAllChannels()
  
    return (
        <main className={style.main}>
            <Suspense fallback={<div>Loading...</div>}>
                <Container/>
            </Suspense>
        </main>
    )
}


