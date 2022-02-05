import React from 'react';

import back from '../../../public/assets/back-button.svg';
import { Wrapper, Element, BackImg, Input, ButtonContainer, DecisionButton } from './style';

const TransactionUpdateForm = ({ modal, onUpdate, onDelete, onCancle }) => {
    return (
        <Wrapper>
            <Element>
                <button onClick={onCancle}>
                    <BackImg src={back} />
                </button>
            </Element>
            <Element>
                <label htmlFor="date">날짜</label>
                <Input
                    type="text"
                    id="date"
                    placeholder="YYYY-MM-DD"
                    autoComplete="off"
                    defaultValue={modal.props.date}
                />
            </Element>
            <Element>
                <label htmlFor="category">카테고리</label>
                <Input
                    type="text"
                    id="category"
                    placeholder="입력하세요."
                    autoComplete="off"
                    defaultValue={modal.props.category}
                />
            </Element>
            <Element>
                <label htmlFor="content">내용</label>
                <Input
                    type="text"
                    id="content"
                    placeholder="입력하세요."
                    autoComplete="off"
                    defaultValue={modal.props.content}
                />
            </Element>
            <Element>
                <label htmlFor="method">결제수단</label>
                <Input
                    type="text"
                    id="method"
                    placeholder="입력하세요."
                    autoComplete="off"
                    defaultValue={modal.props.method}
                />
            </Element>
            <Element>
                <label htmlFor="cost">금액</label>
                <Input
                    type="text"
                    id="cost"
                    placeholder="숫자만 기입하세요.(ex 3000)"
                    autoComplete="off"
                    defaultValue={modal.props.cost}
                />
            </Element>
            <ButtonContainer>
                <DecisionButton type="delete" onClick={onDelete}>
                    삭제
                </DecisionButton>
                <DecisionButton type="update" onClick={onUpdate}>
                    수정
                </DecisionButton>
            </ButtonContainer>
        </Wrapper>
    );
};

export default TransactionUpdateForm;
