import { useState } from 'react';
import { Card } from './Card';
import * as S from './Depressive.style';

const testQuestionsData = [
    { q: '일하는 것에 대한 흥미나 재미가 거의 없나요?' },
    {
        q: '가라앉는 느낌, 우울감 혹은 절망감을 느끼나요?',
    },
    {
        q: '잠들기 어렵거나 자꾸깨어거나 혹은 잠을 너무 많이 자나요?',
    },
    {
        q: '피곤하다고 느끼거나 기력이 저하되었나요?',
    },
    {
        q: '식욕이 줄었거나 혹은 너무 많이 먹나요?',
    },
    {
        q: '나 자신이 나쁜 사람이라고 느낀다거나 나 자신을 실패자라 여기고 나때문에 자신은 물론 가족이 불행하게 되었다고 느끼나요?',
    },
    {
        q: '신문을 읽거나 TV를 볼 때 집중하기 어렵나요?',
    },
    {
        q: '남들이 알아챌 정도로 거동이나 말이 느려지거나 또는 반대로 너무 초조하고 안절부절해서 평소보다 많이 돌아다니고 서성거리나요?',
    },
    {
        q: '나는 차라리 죽는것이 낫겠다고 생각하시거나 어떤식으로든 자해하려고 생각하나요?',
    },
];

const answerList = [
    {
        score: 0,
        text: '전혀 아니다(1일 이하)',
    },
    {
        score: 1,
        text: '2~6일',
    },
    {
        score: 2,
        text: '일주일 이상',
    },
    {
        score: 3,
        text: '거의 매일',
    },
];

const Depressive = () => {
    const [testQuestions, setTestQuestions] = useState(testQuestionsData);

    const selectQuestionData = (index, data) => {
        setTestQuestions((questions) => {
            const tempQuestions = [...questions];
            tempQuestions[index] = { ...tempQuestions[index], a: data };

            return tempQuestions;
        });
    };

    return (
        <S.Container>
            {testQuestions.map((q, index) => {
                return (
                    <div key={index}>
                        <Card
                            question={q}
                            index={index}
                            selected={q.a !== undefined}
                            answerList={answerList}
                            setTestQuestions={selectQuestionData}
                        />
                    </div>
                );
            })}
        </S.Container>
    );
};

export default Depressive;
