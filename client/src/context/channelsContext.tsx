'use client';

import { IChannel } from '@/utils/types';
import React, { createContext, FC, PropsWithChildren, useContext,  useMemo, useState } from 'react';


interface IChannelsContext {
 channels: IChannel[];
 setChannels: React.Dispatch<React.SetStateAction<IChannel[]>>;
}

export const ChannelsContext = createContext<IChannelsContext>({
    channels: [],
    setChannels: () => {},
});

export const ChannelsProvider:FC<PropsWithChildren> = ({ children }) => {
    const [channels, setChannels] = useState<IChannel[]>([]);

    const values = useMemo(
        ()=>({
            channels,
            setChannels
        }),
        [channels]
    )

    return (
        <ChannelsContext.Provider
            value={values}
        >
            {children}
        </ChannelsContext.Provider>
    );
};

export const useChannelsContext = () => useContext(ChannelsContext)