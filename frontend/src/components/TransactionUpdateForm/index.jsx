import React, { useState } from 'react';

import back from '../../../public/assets/back-button.svg';
import {
    Wrapper,
    CostType,
    TypeButton,
    Element,
    BackImg,
    Input,
    ButtonContainer,
    DecisionButton,
} from './style';

const TransactionUpdateForm = ({ transaction, onUpdate, onDelete, onCancle }) => {
    const initCostType = transaction.sign === '+' ? 'income' : 'expenditure';
    const [costType, setCostType] = useState(initCostType);

    const shapedForm = (elements) => {
        const data = {};
        Array.from(elements).forEach((element) => {
            if (element.value) {
                data[element.id] = element.value;
            }
        });
        return data;
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const sign = costType === 'income' ? '+' : '-';
        const data = { ...shapedForm(form.elements), sign };
        onUpdate(data);
    };

    return (
        <Wrapper aria-label="transactionUpdate" onSubmit={handleUpdateSubmit}>
            <Element>
                <button type="button" aria-label="back" onClick={onCancle}>
                    <BackImg src={back} />
                </button>
            </Element>
            <CostType>
                <TypeButton
                    type="button"
                    aria-label="income"
                    active={costType === 'income'}
                    onClick={() => setCostType('income')}
                >
                    수입
                </TypeButton>
                <TypeButton
                    type="button"
                    aria-label="expenditure"
                    active={costType === 'expenditure'}
                    onClick={() => setCostType('expenditure')}
                >
                    지출
                </TypeButton>
            </CostType>
            <Element>
                <label htmlFor="date">날짜</label>
                <Input
                    type="text"
                    id="date"
                    placeholder="YYYY-MM-DD"
                    autoComplete="off"
                    defaultValue={transaction.date}
                />
            </Element>
            <Element>
                <label htmlFor="category">카테고리</label>
                <Input
                    type="text"
                    id="category"
                    placeholder="입력하세요."
                    autoComplete="off"
                    defaultValue={transaction.category}
                />
            </Element>
            <Element>
                <label htmlFor="content">내용</label>
                <Input
                    type="text"
                    id="content"
                    placeholder="입력하세요."
                    autoComplete="off"
                    defaultValue={transaction.content}
                />
            </Element>
            <Element>
                <label htmlFor="method">결제수단</label>
                <Input
                    type="text"
                    id="method"
                    placeholder="입력하세요."
                    autoComplete="off"
                    defaultValue={transaction.method}
                />
            </Element>
            <Element>
                <label htmlFor="cost">금액</label>
                <Input
                    type="text"
                    id="cost"
                    placeholder="숫자만 기입하세요.(ex 3000)"
                    autoComplete="off"
                    defaultValue={transaction.cost}
                />
            </Element>
            <ButtonContainer>
                <DecisionButton type="button" action="delete" onClick={onDelete}>
                    삭제
                </DecisionButton>
                <DecisionButton type="submit" action="update">
                    수정
                </DecisionButton>
            </ButtonContainer>
        </Wrapper>
    );
};

export default TransactionUpdateForm;
