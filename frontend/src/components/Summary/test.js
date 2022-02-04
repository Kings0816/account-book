import React from 'react';
import { render, screen, fireEvent } from '../../test-utils';
import '@testing-library/jest-dom';

import Summary from '.';
import { transactions } from '../../mocks/transactions';
import { calculateIncome, calculateExpenditure } from '../../utils/common/calculate-cost';

const TOTAL_COUNT = transactions.length;
const INCOME = calculateIncome(transactions);
const EXPENDITURE = calculateExpenditure(transactions);

describe('메인 화면(지출입 내역) Summary 컴포넌트 테스트', () => {
    it('총 이체, 수입, 지출까지 3개의 체크박스가 표시된다.', async () => {
        render(<Summary />);

        const checkBoxes = await screen.findAllByRole('checkbox');

        expect(checkBoxes).toHaveLength(3);
    });

    it('현재 날짜에 해당하는 총 이체 건수가 정상적으로 표시된다.', async () => {
        render(<Summary />);

        const totalCountSpan = await screen.findByTestId('totalCount');

        expect(totalCountSpan).toHaveTextContent(TOTAL_COUNT);
    });

    it('현재 날짜에 해당하는 수입이 정상적으로 표시된다.', async () => {
        render(<Summary />);

        const incomeSpan = await screen.findByTestId('income');

        expect(incomeSpan).toHaveTextContent(parseInt(INCOME).toLocaleString('ko-KR'));
    });

    it('현재 날짜에 해당하는 지출이 정상적으로 표시된다.', async () => {
        render(<Summary />);

        const expenditureSpan = await screen.findByTestId('expenditure');

        expect(expenditureSpan).toHaveTextContent(parseInt(EXPENDITURE).toLocaleString('ko-KR'));
    });

    it('총 이체 체크박스를 클릭하면 체크박스 상태가 변경된다.', async () => {
        render(<Summary />);

        const totalCountCheckBox = await screen.findByRole('checkbox', { name: '총 이체' });
        expect(totalCountCheckBox.checked).toEqual(true);

        fireEvent.click(totalCountCheckBox);

        expect(totalCountCheckBox.checked).toEqual(false);
    });

    it('수입 체크박스를 클릭하면 체크박스 상태가 변경된다.', async () => {
        render(<Summary />);

        const incomeCheckBox = await screen.findByRole('checkbox', { name: '수입' });
        expect(incomeCheckBox.checked).toEqual(true);

        fireEvent.click(incomeCheckBox);

        expect(incomeCheckBox.checked).toEqual(false);
    });

    it('지출 체크박스를 클릭하면 체크박스 상태가 변경된다.', async () => {
        render(<Summary />);

        const expenditureCheckBox = await screen.findByRole('checkbox', { name: '지출' });
        expect(expenditureCheckBox.checked).toEqual(true);

        fireEvent.click(expenditureCheckBox);

        expect(expenditureCheckBox.checked).toEqual(false);
    });
});
