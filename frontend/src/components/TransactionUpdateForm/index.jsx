import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import Dropdown from '../Dropdown';
import { methodState } from '../../recoil/method/atom';
import { categoryState } from '../../recoil/category/atom';
import { deleteCategory } from '../../lib/category';
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
    const [activeCategory, setActiveCategory] = useState(false);
    const [activeMethod, setActiveMethod] = useState(false);
    const [inputs, setInputs] = useState(transaction);

    const methods = useRecoilValue(methodState);
    const [categories, setCategories] = useRecoilState(categoryState);

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

    const removeCategory = async (id, e) => {
        e.stopPropagation();
        const complete = await deleteCategory(id);
        complete && setCategories((prev) => prev.filter((_prev) => _prev.id !== id));
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
                <Dropdown
                    name="category"
                    data={categories}
                    active={activeCategory}
                    changeHandler={changeCategory}
                    deleteHandler={removeCategory}
                    createHandler={() => console.log('생성로직')}
                />
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
                <Dropdown
                    name="method"
                    data={methods}
                    active={activeMethod}
                    changeHandler={changeMethod}
                />
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
