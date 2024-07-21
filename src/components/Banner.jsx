import { useEffect, useState } from 'react';
import { BannerContainer } from './CompStyle.style';
import { searchCenter } from '../apis/location';

export const Banner = () => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (e) => {
            const data = {
                latitude: e.coords.latitude,
                longitude: e.coords.longitude,
            };
            const location = e;
            console.log(e);
            const result = (await searchCenter(data)).data;
            console.log('success', result);
        });
    }, []);

    return (
        <BannerContainer>
            <img src="/location.svg" alt="location" />
            <span>서울 구로서울 구로구 디지털로 26길 72</span>
        </BannerContainer>
    );
};
