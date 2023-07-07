'use client'

import React, { FC, PropsWithChildren } from 'react'
import { ChannelsProvider } from '@/context/channelsContext'
import {QueryClientProvider,QueryClient} from 'react-query';

const queryClient = new QueryClient()

const Providers:FC<PropsWithChildren> = ({children}) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ChannelsProvider>
                {children}
            </ChannelsProvider>
        </QueryClientProvider>
    )
}

export default Providers