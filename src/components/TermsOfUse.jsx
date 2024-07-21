import styled from 'styled-components';

export const TermsOfUse = ({ setUseOpen }) => {
    return (
        <TermsOfUseContainer>
            <h3>
                돌봄이 서비스 이용약관{' '}
                <button
                    onClick={() => {
                        setUseOpen(false);
                    }}
                >
                    {'X'}
                </button>
            </h3>

            <h4>제1조 (목적)</h4>
            <p>
                이 이용약관은 치매 노인을 돌보는 가족들을 위한 돌봄이 서비스의 이용 조건 및 절차 등을 규정함을 목적으로
                합니다.
            </p>

            <h4>제2조 (정의)</h4>
            <p>"돌봄이"란 치매 노인을 돌보는 가족들을 위해 제공되는 정보와 기능을 포함한 일체의 서비스를 의미합니다.</p>
            <p>"이용자"란 본 서비스를 이용하는 치매 노인 가족을 말합니다.</p>

            <h4>제3조 (서비스 내용)</h4>
            <ul>
                <li>치매 노인 가족을 위한 위로와 지원</li>
                <li>우울증 자가진단 기능</li>
                <li>주변 치매안심센터 정보 제공</li>
            </ul>

            <h4>제4조 (이용자의 의무)</h4>
            <p>이용자는 서비스 이용 시 관련 법령과 본 약관의 규정을 준수해야 합니다.</p>
            <p>이용자는 서비스 이용과 관련하여 타인의 권리를 침해하거나 방해해서는 안 됩니다.</p>

            <h4>제5조 (서비스 이용 제한)</h4>
            <p>운영자는 부적절한 콘텐츠 게시, 타인의 권리 침해 등의 경우 이용자의 서비스 이용을 제한할 수 있습니다.</p>

            <h4>제6조 (개인정보 보호)</h4>
            <p>운영자는 이용자의 개인정보를 보호하기 위해 노력합니다.</p>
            <p>이용자의 개인정보 수집 및 이용 등에 관한 사항은 별도의 개인정보처리방침에 따릅니다.</p>

            <h4>제7조 (면책 및 손해배상)</h4>
            <p>운영자는 천재지변, 국가비상사태 등 불가항력적인 사유로 인한 서비스 중단에 대해 책임지지 않습니다.</p>
            <p>이용자의 고의 또는 과실로 인한 손해에 대해서는 이용자가 책임을 집니다.</p>

            <h4>제8조 (기타)</h4>
            <p>본 약관에 명시되지 않은 사항은 관련 법령 및 서비스 운영정책에 따릅니다.</p>
            <p>본 약관은 서비스 운영 상황에 따라 변경될 수 있습니다.</p>
        </TermsOfUseContainer>
    );
};

const TermsOfUseContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    background-color: white;
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
    li {
        list-style: none;
        padding-left: 40px;
    }
`;
