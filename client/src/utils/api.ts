import axios from 'axios';

export const baseUrl = 'http://localhost:3000';

export const getAllChannels = async () => {
    try {
        const res = await axios.get(`${baseUrl}/channels`)
        const channels = res.data.data;
        return channels;
        
    } catch (error) {
        console.log(error)
    }
};