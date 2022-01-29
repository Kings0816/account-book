import React from 'react';
import styled from 'styled-components';

import { MAX_MOBILE_DEVICE } from '../../utils/device-size';
import { entireTransaction } from '../../dummy/transaction';

const Summary = () => {
    const currentDate = '2022-01';
    const rawTransactions = entireTransaction[currentDate];

    const transactionCount = Object.values(rawTransactions).reduce(
        (acc, transaction) => acc + transaction.length,
        0,
    );

    let monthIncome = 0;
    Object.values(rawTransactions).forEach((rawTransaction) => {
        monthIncome += rawTransaction
            .filter((transaction) => transaction.sign === '+')
            .reduce((acc, transaction) => acc + parseInt(transaction.cost), 0);
    });

    let monthExpenditure = 0;
    Object.values(rawTransactions).forEach((rawTransaction) => {
        monthExpenditure += rawTransaction
            .filter((transaction) => transaction.sign === '-')
            .reduce((acc, transaction) => acc + parseInt(transaction.cost), 0);
    });

    // TODO 체크박스 전역 상태관리 필요할듯함 + label 안에 input 넣는 식으로 변경?
    return (
        <SummaryContainer>
            <SummaryBox color={'gray'}>
                <span>
                    <input type="checkbox" defaultChecked /> 총 이체
                </span>
                <span>{transactionCount}건</span>
            </SummaryBox>
            <SummaryBox color={'blue'}>
                <span>
                    <input type="checkbox" defaultChecked /> 수입
                </span>
                <span>{parseInt(monthIncome).toLocaleString('ko-KR')}원</span>
            </SummaryBox>
            <SummaryBox color={'mint'}>
                <span>
                    <input type="checkbox" defaultChecked /> 지출
                </span>
                <span>{parseInt(monthExpenditure).toLocaleString('ko-KR')}원</span>
            </SummaryBox>
        </SummaryContainer>
    );
};

export default Summary;

const SummaryContainer = styled.div`
    width: 300px;
    height: 150px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    border-radius: 3px;
    box-sizing: border-box;
    box-shadow: ${({ theme }) => theme.shadow.thick};

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        padding-left: 15px;
        width: 100%;
        height: 50px;

        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        box-shadow: ${({ theme }) => theme.shadow.pale};
    }
`;

const SummaryBox = styled.div`
    margin: 0px 15px;
    width: calc(100% - 30px);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.default};
    color: ${(props) =>
        ({ theme }) =>
            theme.color[props.color]};

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        margin: 0px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        font-size: ${({ theme }) => theme.fontSize.mini};
    }
`;
