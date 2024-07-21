import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 27px 0;
    .logo {
        flex: 2;
        cursor: pointer;
    }
    .icons {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }
    img {
        max-width: 100%;
        height: 50px;
    }

    @media (max-width: 768px) {
        img {
            height: 30px;
        }
    }
`;

export const BannerContainer = styled.div`
    display: flex;
    width: calc(100vw - 17px);
    position: relative;
    left: -40px;
    background-color: #e6f0ff;
    padding: 7px 40px;
    @media (max-width: 768px) {
        left: -20px;
        padding: 7px 20px;
    }

    span {
        white-space: nowrap;
    }
`;
