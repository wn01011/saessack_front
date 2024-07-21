import { useNavigate } from 'react-router-dom';
import { HeaderContainer } from './CompStyle.style';

export const Header = () => {
    const navigate = useNavigate();
    return (
        <HeaderContainer>
            <div
                className="logo"
                onClick={() => {
                    navigate('/');
                }}
            >
                <img src="/logo_home.png" alt="logo" />
            </div>
            <div className="icons">
                <img src="/alarm.svg" alt="alarm" />
                <img src="/menu.svg" alt="hamburger" />
            </div>
        </HeaderContainer>
    );
};
