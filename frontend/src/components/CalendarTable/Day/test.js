import React from 'react';
import { render, screen } from '../../../test-utils';
import moment from 'moment';

import Day from './index';
import { transactions } from '../../../mocks/transactions';
import { calculateIncome, calculateExpenditure } from '../../../utils/common/calculate-cost';

const DAY = moment('2022-01-01');
const TRANSACTIONS = transactions;
const INCOME = calculateIncome(transactions);
const EXPENDITURE = calculateExpenditure(transactions);
const TOTAL = INCOME - EXPENDITURE;

describe('해당하는 일자의 수입, 지출, 총계를 표시하는 Day 컴포넌트 테스트', () => {
    it('해당하는 일자의 수입, 지출, 총계가 표시된다.', () => {
        render(
            <table>
                <tbody>
                    <tr>
                        <Day day={DAY} transactions={TRANSACTIONS} isInMonth={true} />
                    </tr>
                </tbody>
            </table>,
        );
        const SHAPED_INCOME = parseInt(INCOME).toLocaleString();
        const SHAPED_EXPENDITURE = parseInt(EXPENDITURE * -1).toLocaleString();
        const SHAPED_TOTAL = parseInt(TOTAL).toLocaleString();
        expect(screen.getByText(SHAPED_INCOME)).toBeInTheDocument();
        expect(screen.getByText(SHAPED_EXPENDITURE)).toBeInTheDocument();
        expect(screen.getByText(SHAPED_TOTAL)).toBeInTheDocument();
    });
});
