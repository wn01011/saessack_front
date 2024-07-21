import { useEffect } from 'react';
import styled from 'styled-components';

export const Card = ({ question, index, selected, answerList, setTestQuestions }) => {
    const curTime = new Date();
    const curHour = curTime.getHours() % 12;
    const isAM = curTime.getHours / 12 <= 1;

    useEffect(() => {
        console.log(question);
    }, [question]);
    return (
        <Container>
            <div className="bom">
                <span>돌봄이</span>
                <span className="time">{isAM ? 'AM ' : 'PM ' + curHour + ' : ' + curTime.getMinutes()}</span>
            </div>
            <div className="question">
                {question.q}
                {question.a ? (
                    <div
                        className="button select"
                        onClick={() => {
                            setTestQuestions(index, undefined);
                        }}
                    >
                        {answerList[question.a].text}
                    </div>
                ) : (
                    <div className="list">
                        {answerList.map((a, _index) => {
                            return (
                                <div
                                    className="button"
                                    key={a.text + _index}
                                    onClick={() => {
                                        setTestQuestions(index, _index);
                                    }}
                                >
                                    {a.text}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </Container>
    );
};

const Container = styled.div`
    margin: 20px 0;
    .bom {
        margin: 10px 0;
    }
    .time {
        padding-left: 20px;
        font-size: 12px;
        color: #989898;
    }
    .question {
        border: 1px solid #d8d8d8;
        padding: 20px;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .list {
        & > div {
            cursor: pointer;
            &:hover {
                background-color: black;
                color: white;
            }
        }
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .button {
        border: 1px solid #d8d8d8;
        padding: 10px 20px;
        border-radius: 12px;
        cursor: pointer;
        &.select {
            background-color: black;
            color: white;
        }
    }
`;
