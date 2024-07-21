import styled from 'styled-components';

export const PrivacyPolicy = ({ setPolicyOpen }) => {
    return (
        <PrivacyPolicyContainer>
            <h3>
                돌봄이 서비스 개인정보처리방침
                <button
                    onClick={() => {
                        setPolicyOpen(false);
                    }}
                >
                    X
                </button>
            </h3>

            <h4>제1조 (개인정보의 처리 목적)</h4>
            <p>본 서비스는 치매 노인을 돌보는 가족들에게 다음과 같은 목적으로 개인정보를 처리합니다.</p>
            <ul>
                <li>위치정보 제공 동의자에 한해 주변 치매안심센터 정보 제공</li>
                <li>우울증 자가진단 기능 제공</li>
                <li>치매 노인 가족을 위한 정보 및 상담 서비스 제공</li>
            </ul>

            <h4>제2조 (처리하는 개인정보의 항목)</h4>
            <p>본 서비스에서 처리하는 개인정보 항목은 다음과 같습니다.</p>
            <ul>
                <li>선택항목: 위치정보</li>
            </ul>

            <h4>제3조 (개인정보의 보유 및 이용기간)</h4>
            <p>이용자가 회원 탈퇴를 요청하거나 개인정보 처리 목적이 달성되면 지체 없이 파기합니다.</p>
            <p>다만, 관련 법령에 의해 보존할 필요가 있는 경우에는 해당 법령에 따라 보존합니다.</p>

            <h4>제4조 (개인정보의 제3자 제공)</h4>
            <p>
                본 서비스는 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다. 다만, 관련 법령에 의거하거나 수사
                목적으로 요구받은 경우에는 예외로 합니다.
            </p>

            <h4>제5조 (개인정보 처리 위탁)</h4>
            <p>
                본 서비스는 서비스 제공을 위해 필요한 경우 개인정보 처리를 위탁할 수 있습니다. 이 경우 위탁 받은 업체 및
                위탁 업무 내용을 이용자에게 공개합니다.
            </p>

            <h4>제6조 (이용자의 권리와 의무)</h4>
            <p>이용자는 자신의 개인정보에 대한 열람, 정정, 삭제, 처리정지 요구 등의 권리를 가집니다.</p>
            <p>이용자는 자신의 개인정보를 보호할 책임이 있으며, 타인의 개인정보를 훼손하지 않아야 합니다.</p>

            <h4>제7조 (개인정보 보호책임자)</h4>
            <p>본 서비스의 개인정보 보호책임자는 돌봄이 서비스 운영진입니다.</p>
        </PrivacyPolicyContainer>
    );
};

const PrivacyPolicyContainer = styled.div`
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
