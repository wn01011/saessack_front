import { Banner } from '../../components/Banner';
import Chat from './chat/Chat';
import * as S from './Main.style';
import Searching from './Searching';

const Main = () => {
    return (
        <S.Conatiner>
            <Banner />
            <Searching />
            <Chat />
        </S.Conatiner>
    );
};

export default Main;
