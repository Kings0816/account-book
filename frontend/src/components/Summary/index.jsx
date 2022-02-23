import React from 'react';
import { useRecoilState } from 'recoil';

import { checkState } from '../../recoil/check/atom';

import { useTransactionSummary } from '../../hooks/useTransactionSummary';

import { SummaryContainer, SummaryBox } from './style';

const Summary = () => {
    const [check, setCheck] = useRecoilState(checkState);
    const { transactionCount, monthIncome, monthExpenditure } = useTransactionSummary();

    return (
        <SummaryContainer>
            <SummaryBox color={'gray'}>
                <span>
                    <input
                        type="checkbox"
                        id="totalCount"
                        checked={check.totalCount}
                        onChange={() =>
                            setCheck((prev) => ({ ...prev, totalCount: !prev.totalCount }))
                        }
                    />{' '}
                    <label htmlFor="totalCount">총 이체</label>
                </span>
                <span data-testid="totalCount">{transactionCount}건</span>
            </SummaryBox>
            <SummaryBox color={'blue'}>
                <span>
                    <input
                        type="checkbox"
                        id="income"
                        checked={check.income}
                        onChange={() => setCheck((prev) => ({ ...prev, income: !prev.income }))}
                    />{' '}
                    <label htmlFor="income">수입</label>
                </span>
                <span data-testid="income">{parseInt(monthIncome).toLocaleString('ko-KR')}원</span>
            </SummaryBox>
            <SummaryBox color={'green'}>
                <span>
                    <input
                        type="checkbox"
                        id="expenditure"
                        checked={check.expenditure}
                        onChange={() =>
                            setCheck((prev) => ({ ...prev, expenditure: !prev.expenditure }))
                        }
                    />{' '}
                    <label htmlFor="expenditure">지출</label>
                </span>
                <span data-testid="expenditure">
                    {parseInt(monthExpenditure).toLocaleString('ko-KR')}원
                </span>
            </SummaryBox>
        </SummaryContainer>
    );
};

export default Summary;
