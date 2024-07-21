import { HeaderContainer } from './CompStyle.style';

export const Header = () => {
    return (
        <HeaderContainer>
            <div className="logo">
                <img src="/logo_home.png" alt="logo" />
            </div>
            <div className="icons">
                <img src="/alarm.svg" alt="alarm" />
                <img src="/menu.svg" alt="hamburger" />
            </div>
        </HeaderContainer>
    );
};
