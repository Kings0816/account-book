import React from 'react';
import { useRecoilState } from 'recoil';

import { checkState } from '../../recoil/check/atom';

import { useTransactionSummary } from '../../hooks/useTransactionSummary';

import { SummaryContainer, SummaryBox } from './style';

const Summary = () => {
    const [check, setCheck] = useRecoilState(checkState);
    const [transactionCount, monthIncome, monthExpenditure] = useTransactionSummary();

    // TODO 체크박스 전역 상태관리 필요할듯함 + label 안에 input 넣는 식으로 변경?
    return (
        <SummaryContainer>
            <SummaryBox color={'gray'}>
                <span>
                    <input
                        type="checkbox"
                        checked={check.totalCount}
                        onChange={() =>
                            setCheck((prev) => ({ ...prev, totalCount: !prev.totalCount }))
                        }
                    />{' '}
                    총 이체
                </span>
                <span>{transactionCount}건</span>
            </SummaryBox>
            <SummaryBox color={'blue'}>
                <span>
                    <input
                        type="checkbox"
                        checked={check.income}
                        onChange={() => setCheck((prev) => ({ ...prev, income: !prev.income }))}
                    />{' '}
                    수입
                </span>
                <span>{parseInt(monthIncome).toLocaleString('ko-KR')}원</span>
            </SummaryBox>
            <SummaryBox color={'mint'}>
                <span>
                    <input
                        type="checkbox"
                        checked={check.expenditure}
                        onChange={() =>
                            setCheck((prev) => ({ ...prev, expenditure: !prev.expenditure }))
                        }
                    />{' '}
                    지출
                </span>
                <span>{parseInt(monthExpenditure).toLocaleString('ko-KR')}원</span>
            </SummaryBox>
        </SummaryContainer>
    );
};

export default Summary;
