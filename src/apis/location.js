import axios from 'axios';
const URL = 'http://3.34.118.97:8080';
const KAKAO_API_KEY = '1e4f66b762fd808d9ff0b89319d40ffa';

export const searchCenter = async ({ latitude, longitude, page = 0, size = 20 }) => {
    const result = await axios.get(
        URL + `/center-info/nearby?latitude=${latitude}&longitude=${longitude}&page=${page}&size=${size}`
    );

    return result;
};

export const getLocationWithLatLong = async (lat, long) => {
    return await axios.get('https://map.kakao.com/link/map/' + lat + ',' + long);
};
