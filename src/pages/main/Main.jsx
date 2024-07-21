import { useState } from 'react';
import { Banner } from '../../components/Banner';
import Chat from './chat/Chat';
import * as S from './Main.style';
import Searching from './Searching';
import { TermsOfUse } from '../../components/TermsOfUse';
import { PrivacyPolicy } from '../../components/PrivacyPolicy';

const Main = () => {
    const [useOpen, setUseOpen] = useState(false);
    const [policyOpen, setPolicyOpen] = useState(false);

    return (
        <S.Conatiner>
            <Banner />
            <Searching />
            <Chat setUseOpen={setUseOpen} setPolicyOpen={setPolicyOpen} />
            {useOpen && <TermsOfUse setUseOpen={setUseOpen} />}
            {policyOpen && <PrivacyPolicy setPolicyOpen={setPolicyOpen} />}
        </S.Conatiner>
    );
};

export default Main;
