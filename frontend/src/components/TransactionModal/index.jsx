import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { modalState } from '../../recoil/modal/atom';
import back from '../../../public/assets/back-button.svg';
import { MAX_MOBILE_DEVICE } from '../../utils/constant/device-size';

const TransactionModal = () => {
    const [modal, setModal] = useRecoilState(modalState);

    if (modal.props == null) return null;
    return (
        <Wrapper active={modal.current === 'transaction'}>
            <BackgroundDim />
            <Card>
                <Element>
                    <button onClick={() => setModal({ current: null, props: null })}>
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
                    <DecisionButton type="delete">삭제</DecisionButton>
                    <DecisionButton type="submit">수정</DecisionButton>
                </ButtonContainer>
            </Card>
        </Wrapper>
    );
};

export default TransactionModal;

const Wrapper = styled.div`
    display: ${(props) => (props.active ? 'block' : 'none')};
`;

const BackgroundDim = styled.div`
    position: fixed;
    z-index: 1;

    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    background-color: ${({ theme }) => theme.color.black};
    opacity: 0.57;
`;

const Card = styled.form`
    position: fixed;
    z-index: 2;

    width: 700px;
    height: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.color.white};
    box-shadow: ${({ theme }) => theme.shadow.thick};

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        transform: none;

        justify-content: space-evenly;

        box-shadow: none;
    }
`;

const Element = styled.div`
    margin-bottom: 10px;
    width: 250px;

    display: flex;
    flex-direction: column;

    font-weight: bold;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        width: 80vw;
        height: 12vh;

        justify-content: center;
    }
`;

const BackImg = styled.img`
    float: left;
`;

const Input = styled.input`
    margin-top: 5px;
    padding: 10px;

    border: 1px solid ${({ theme }) => theme.color.brigtenL1Gray};
    border-radius: 10px;
    background: ${({ theme }) => theme.color.whiteSmoke};

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        height: 80%;
    }
`;

const ButtonContainer = styled.div`
    padding-left: 0px;
    width: 250px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        width: 80vw;
        height: 12vh;
    }
`;

const DecisionButton = styled.button`
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.default};
    color: ${(props) => (props.type === 'submit' ? '#0990d6' : '#ff000f')};
`;
