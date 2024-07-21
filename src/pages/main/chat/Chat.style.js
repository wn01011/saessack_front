import styled from 'styled-components';

export const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 40px 25px;
    border-radius: 20px;
    width: 100%;

    box-shadow: 0 0 5px #8d8d8d;

    .imgBox {
        margin: 30px auto;
        padding: 10px 0;
        box-shadow: 0 0 5px #8d8d8d;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        aspect-ratio: 1;
        border-radius: 50%;
        position: relative;
        img {
            height: 196px;
        }
        h3 {
            position: absolute;
            bottom: -40px;
            font-weight: 500;
        }
    }

    .description {
        width: 100%;
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .buttons {
        margin-top: 40px;
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: 20px;
        .row {
            display: flex;
            gap: 20px;
            position: relative;
            justify-content: space-between;
        }
        button {
            flex: 1;
            cursor: pointer;
            border: 2px solid #114da7;
            border-radius: 8px;
            padding: 10px 30px;
            &.revert {
                background-color: #114da7;
                color: white;
            }
        }
        .arrow {
            position: absolute;
            right: 30px;
            height: 100%;
            color: white;
            font-weight: 600;
            font-size: 25px;
        }
    }

    .right {
        display: flex;
        gap: 20px;
        width: 100%;
        justify-content: end;
        margin: 20px 0;
        p {
            font-size: 16px;
        }
        & p:hover {
            cursor: pointer;
            color: black;
        }
    }
`;
