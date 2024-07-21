import { useNavigate } from 'react-router-dom';
import * as S from './Chat.style';

const Chat = ({ setUseOpen, setPolicyOpen }) => {
    const navigate = useNavigate();

    return (
        <S.ChatContainer>
            <h3>
                <span className="highlight">홍길동</span>님,
            </h3>
            <h3>봄이에게 대화를 요청해보세요!</h3>

            <div className="imgBox">
                <img src="/bom.png" alt="봄이" />
                <h3>돌봄이</h3>
            </div>
            <div className="description">
                <p>치매 가족분들을 돌보느라 지치신 마음.</p>
                <p>봄이가 위로해드릴게요.</p>
            </div>

            <div className="buttons">
                <div className="row">
                    <button
                        onClick={() => {
                            navigate('/depressive');
                        }}
                    >
                        우울증 자가진단
                    </button>
                    <button>따뜻한 위로</button>
                </div>
                <div className="row">
                    <button
                        className="revert"
                        onClick={() => {
                            navigate('/chat');
                        }}
                    >
                        대화 시작하기
                    </button>
                    <span className="arrow">{'>'}</span>
                </div>
            </div>

            <div className="right">
                <p
                    onClick={() => {
                        setUseOpen(true);
                    }}
                >
                    이용약관
                </p>
                <p
                    onClick={() => {
                        setPolicyOpen(true);
                    }}
                >
                    개인정보 처리방침
                </p>
            </div>
        </S.ChatContainer>
    );
};

export default Chat;
