import React, { useState } from 'react';
import styled from 'styled-components';

import back from '../../../public/assets/back-button.svg';
import deleteImg from '../../../public/assets/delete-button.svg';
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
    const [activeCategory, setActiveCategory] = useState(false);
    const [activeMethod, setActiveMethod] = useState(false);
    const [inputs, setInputs] = useState(transaction);

    const handleUpdateSubmit = (e) => {
        e.preventDefault();

        const data = inputs;
        onUpdate(data);
    };

    const categoryActiveToggle = () => {
        setActiveCategory((prev) => !prev);
    };

    const methodActiveToggle = () => {
        setActiveMethod((prev) => !prev);
    };

    const changeSign = (sign) => {
        setInputs((prev) => ({ ...prev, sign }));
    };

    const changeDate = (e) => {
        setInputs((prev) => ({ ...prev, date: e.target.value }));
    };

    const changeCategory = (e) => {
        setInputs((prev) => ({ ...prev, category: e.target.innerText }));
        categoryActiveToggle();
    };

    const changeContent = (e) => {
        setInputs((prev) => ({ ...prev, content: e.target.value }));
    };

    const changeMethod = (e) => {
        setInputs((prev) => ({ ...prev, method: e.target.innerText }));
        methodActiveToggle();
    };

    const changeCost = (e) => {
        setInputs((prev) => ({ ...prev, cost: e.target.value }));
    };

    const deleteCategory = (e) => {
        e.stopPropagation();
        console.log('삭제하기');
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
                    active={inputs.sign === '+'}
                    onClick={() => changeSign('+')}
                >
                    수입
                </TypeButton>
                <TypeButton
                    type="button"
                    aria-label="expenditure"
                    active={inputs.sign === '-'}
                    onClick={() => changeSign('-')}
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
                    value={inputs.date}
                    onChange={changeDate}
                />
            </Element>
            <Element>
                <label htmlFor="category">카테고리</label>
                <Input
                    type="text"
                    id="category"
                    placeholder="입력하세요."
                    autoComplete="off"
                    readOnly
                    value={inputs.category}
                    onClick={categoryActiveToggle}
                />
                <DropdownContainer active={activeCategory}>
                    <Item onClick={changeCategory}>
                        <span>일상/생활</span>
                        <img src={deleteImg} onClick={deleteCategory} />
                    </Item>
                    <Item onClick={changeCategory}>
                        <span>식비</span>
                        <img src={deleteImg} onClick={deleteCategory} />
                    </Item>
                    <Item onClick={changeCategory}>
                        <span>카페</span>
                        <img src={deleteImg} onClick={deleteCategory} />
                    </Item>
                    <Item onClick={changeCategory}>
                        <span>교통</span>
                        <img src={deleteImg} onClick={deleteCategory} />
                    </Item>
                    <Item>
                        <button type="button" aria-label="addCategory">
                            추가하기
                        </button>
                    </Item>
                </DropdownContainer>
            </Element>
            <Element>
                <label htmlFor="content">내용</label>
                <Input
                    type="text"
                    id="content"
                    placeholder="입력하세요."
                    autoComplete="off"
                    value={inputs.content}
                    onChange={changeContent}
                />
            </Element>
            <Element>
                <label htmlFor="method">결제수단</label>
                <Input
                    type="text"
                    id="method"
                    placeholder="입력하세요."
                    autoComplete="off"
                    readOnly
                    value={inputs.method}
                    onClick={methodActiveToggle}
                />
                <DropdownContainer active={activeMethod}>
                    <Item onClick={changeMethod}>
                        <span>카카오페이</span>
                    </Item>
                    <Item onClick={changeMethod}>
                        <span>현금</span>
                    </Item>
                    <Item onClick={changeMethod}>
                        <span>토스</span>
                    </Item>
                </DropdownContainer>
            </Element>
            <Element>
                <label htmlFor="cost">금액</label>
                <Input
                    type="text"
                    id="cost"
                    placeholder="숫자만 기입하세요.(ex 3000)"
                    autoComplete="off"
                    value={inputs.cost}
                    onChange={changeCost}
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

const DropdownContainer = styled.ul`
    z-index: 3;
    margin-top: 60px;
    position: absolute;
    width: 250px;

    visibility: ${(props) => (props.active ? 'none' : 'hidden')};

    border: 1px solid ${({ theme }) => theme.color.brigtenL1Gray};
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: ${({ theme }) => theme.shadow.pale};
`;

const Item = styled.li`
    margin: 0 auto;
    padding: 10px 0;
    width: 90%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid #d7d7d7;
    font-weight: normal;

    & > button {
        border-bottom: none;
        font-weight: bold;
    }

    &:hover {
        transform: scale(1.01);
        background: ${({ theme }) => theme.color.brigtenL2Gray};
        cursor: pointer;
    }
`;
