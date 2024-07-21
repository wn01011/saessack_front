import { SearchingContainer } from './Main.style';

const Searching = () => {
    return (
        <SearchingContainer>
            <h2>함께 돌봐요</h2>
            <p>치매돌봄 교육자 주변 치매안심센터를 알려드릴게요!</p>
            <p>원하는 정보를 편리하게 찾아보세요</p>

            <div className="input">
                <input type="text" placeholder="치매 안심센터 검색하기" />
                <img src="/mic.svg" alt="mic" />
            </div>
        </SearchingContainer>
    );
};

export default Searching;
