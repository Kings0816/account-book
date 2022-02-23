import React from 'react';
import { render, screen } from '../../test-utils';
import '@testing-library/jest-dom';

import Transactions from '.';
import { transactions } from '../../mocks/transactions';

describe('해당 날짜(월 단위)의 모든 거래내역을 표시하는 Transactions 컴포넌트 테스트', () => {
    it('거래내역들이 모두 표시된다.', async () => {
        render(<Transactions transactions={transactions} />);
        const dateItems = await screen.findAllByTestId('date');
        const transactionItems = await screen.findAllByRole('listitem');
        expect(transactionItems).toHaveLength(transactions.length + dateItems.length);
    });

    it('거래내역이 없는 경우 empty 이미지가 표시된다.', () => {
        const EMPTY_DATA = [];
        render(<Transactions transactions={EMPTY_DATA} />);
        const emptyImg = screen.getByRole('img', { name: 'empty' });
        expect(emptyImg).toBeInTheDocument();
    });
});
