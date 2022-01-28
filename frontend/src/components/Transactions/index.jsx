import React from 'react';
import styled from 'styled-components';

import Summary from '../Summary';
import { MAX_MOBILE_DEVICE } from '../../utils/device-size';

const Transactions = () => {
    return (
        <Wrapper>
            <Summary />
            <TransactionContainer>
                <DailyInfo>
                    <span>1월 28일 금</span>
                    <div>
                        <span>수입 3,750,000</span>
                        <span> 지출 24,700</span>
                    </div>
                </DailyInfo>
                <Transaction>
                    <OuterBox>
                        <Category>카페/간식</Category>
                        <InnerBox>
                            <Content>녹차 스무디</Content>
                            <Method>카드/현금</Method>
                        </InnerBox>
                    </OuterBox>
                    <Cost>5,700원</Cost>
                </Transaction>
                <Transaction>
                    <OuterBox>
                        <Category>식비</Category>
                        <InnerBox>
                            <Content>돈까스 & 제육볶음</Content>
                            <Method>카드/현금</Method>
                        </InnerBox>
                    </OuterBox>
                    <Cost>19,000원</Cost>
                </Transaction>
                <Transaction>
                    <OuterBox>
                        <Category>월급</Category>
                        <InnerBox>
                            <Content>월급 들어왔다!~</Content>
                            <Method>카드</Method>
                        </InnerBox>
                    </OuterBox>
                    <Cost>3,750,000원</Cost>
                </Transaction>
            </TransactionContainer>
        </Wrapper>
    );
};

export default Transactions;

const Wrapper = styled.div`
    width: calc(100vw - 15px);
    height: calc(100vh - 125px);

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`;

const TransactionContainer = styled.ul`
    margin-top: 20px;
    width: 100%;
`;

// TODO div 태그로 사용할 지 아니면 아래의 Transaction과 유사하니 공통요소 추출할 지 체크
const DailyInfo = styled.div`
    width: 90%;
    margin: 0px auto;
    padding: 10px 0px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid #d7d7d7;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        margin: 0px 15px;

        font-size: ${({ theme }) => theme.fontSize.mini};
    }
`;

const Transaction = styled.li`
    width: 90%;
    margin: 0px auto;
    padding: 10px 0px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid ${({ theme }) => theme.color.brigtenL1Gray};

    &:hover {
        transform: scale(1.01);
        background: ${({ theme }) => theme.color.brigtenL2Gray};
        cursor: pointer;
    }

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        margin: 0px 15px;
    }
`;

const OuterBox = styled.div`
    width: 70%;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const Category = styled.span`
    width: 100px;
    padding: 5px 0px;

    text-align: center;

    border-radius: 999px;
    box-sizing: border-box;

    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.mint};

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        width: 70px;

        font-size: ${({ theme }) => theme.fontSize.mini};
    }
`;

const InnerBox = styled.div`
    width: 80%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        width: calc(100% - 70px);

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }
`;

const Content = styled.span`
    width: 70%;
    padding-left: 10px;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        width: 100%;
        max-width: 100%;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

const Method = styled.span`
    width: 30%;

    color: ${({ theme }) => theme.color.gray};

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        width: 100%;
        padding: 3px 0px 0px 10px;

        font-size: ${({ theme }) => theme.fontSize.mini};
    }
`;

const Cost = styled.span`
    width: 25%;

    text-align: right;

    font-weight: bold;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        max-width: 100px;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;
