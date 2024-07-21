import { useEffect, useState } from 'react';
import { getLocationWithLatLong, searchCenter } from '../../apis/location';
import { SearchingContainer } from './Main.style';
import DaumPostcode from 'react-daum-postcode';
const KakaoMapScript = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=c84007abf4a50ab78e3d4c3faf57065e&libraries=services`;

const Searching = () => {
    const [postOpen, setPostOpen] = useState(false);
    const [location, setLocation] = useState(null);
    const [address, setAddress] = useState('');

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ latitude, longitude });
                    console.log(latitude, longitude);
                    convertCoordsToAddress(latitude, longitude);
                },
                () => {
                    alert('위치 정보를 가져올 수 없습니다.');
                }
            );
        } else {
            alert('Geolocation이 지원되지 않는 브라우저입니다.');
        }
    };

    const convertCoordsToAddress = async (latitude, longitude) => {
        await loadScript(KakaoMapScript);
        // const result = getLocationWithLatLong(latitude, longitude);
        // console.log(result);
        // const geocoder = new window.kakao.maps.services.geocoder();
        // const coord = new window.kakao.maps.LatLng(latitude, longitude);

        // geocoder.coord2Address(coord.getLng(), coord.getLat(), (result, status) => {
        //     if (status === window.kakao.maps.services.Status.OK) {
        //         setAddress(result[0].road_address.address_name);
        //     }
        // });
    };

    const handlePostcodeComplete = (data) => {
        setAddress(data.address);
        setPostOpen(false);
    };

    const Postcode = () => {
        const handleComplete = (data) => {
            let fullAddress = data.address;
            let extraAddress = '';

            if (data.addressType === 'R') {
                if (data.bname !== '') {
                    extraAddress += data.bname;
                }
                if (data.buildingName !== '') {
                    extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
                }
                fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
            }
            // setPostOpen(false);
            console.log(fullAddress, data); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
        };

        return <DaumPostcode onComplete={handleComplete} />;
    };

    const loadScript = (src) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    };

    useEffect(() => {
        getLocation();
    }, []);

    return (
        <SearchingContainer>
            <h2>함께 돌봐요</h2>
            <p>치매돌봄 교육자 주변 치매안심센터를 알려드릴게요!</p>
            <p>원하는 정보를 편리하게 찾아보세요</p>

            <div className="input">
                <input
                    type="text"
                    placeholder="치매 안심센터 검색하기"
                    onClick={() => {
                        setPostOpen(true);
                    }}
                    onKeyDown={(e) => {
                        if (e.code === 'Enter') {
                            // console.log('enter');
                            // navigator.geolocation.getCurrentPosition(
                            //     (e) => {
                            //         const data = {
                            //             latitude: e.coords.latitude,
                            //             longitude: e.coords.longitude,
                            //         };
                            //         console.log('success', data);
                            //         searchCenter(data);
                            //     },
                            //     (e) => {
                            //         console.log('error', e);
                            //         alert('위치정보가 없어요');
                            //     }
                            // );
                        }
                    }}
                />
                <img src="/mic.svg" alt="mic" />
            </div>
            {postOpen && (
                <div
                    onPointerOut={(e) => {
                        setPostOpen(false);
                    }}
                >
                    <Postcode />
                </div>
            )}
        </SearchingContainer>
    );
};

export default Searching;
