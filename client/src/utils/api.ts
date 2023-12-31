import axios from 'axios';
import { ChannelNames, IMessage } from './types';

export const baseUrl = 'http://localhost:3001';

export const getAllChannels = async () => {
    try {
        const res = await axios.get(`${baseUrl}/channels`)
        const channels = res.data.data;
        return channels;
    } catch (error) {
        console.log(error)
    }
};

export const addChannel = async (channel:ChannelNames) => {
    try {
        const res = await axios.post(`${baseUrl}/${channel}`)
        return res.data.data; 
    } catch (error) {
        console.log(error)
    }
};

export const deleteChannel = async (channel:ChannelNames, id:string) => {
    try {
        const res = await axios.delete(`${baseUrl}/${channel}/${id}`)
        return res.data.data;
    } catch (error) {
        console.log(error)
    }
};

export const addMessage = async (channel:ChannelNames, channelId:string, message: IMessage) => {
    try {
        const res = await axios.post(`${baseUrl}/${channel}/${channelId}`, message)
        return res.data.data; 
    } catch (error) {
        console.log(error)
    }
};

export const deleteMessage = async (channel:ChannelNames, messageId:string) => {
    try {
        const res = await axios.delete(`${baseUrl}/${channel}/messages/${messageId}`)
        return res.data.data;
    } catch (error) {
        console.log(error)
    }
};

export const editMessage = async (channel:ChannelNames, messageId:string, message: IMessage) => {
    try {
        const res = await axios.patch(`${baseUrl}/${channel}/messages/${messageId}`, message)
        return res.data.data;
    } catch (error) {
        console.log(error)
    }
};

