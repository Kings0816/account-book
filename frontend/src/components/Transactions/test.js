import React from 'react';
import { render, screen } from '../../test-utils';
import '@testing-library/jest-dom';

import Transactions from '.';
import { transactions } from '../../mocks/transactions';

describe('해당 날짜(월 단위)의 모든 거래내역을 표시하는 Transactions 컴포넌트 테스트', () => {
    it('거래내역들이 모두 표시된다.', async () => {
        render(<Transactions transactions={transactions} />);
        const transactionItems = await screen.findAllByRole('listitem');
        expect(transactionItems).toHaveLength(transactions.length);
    });
});
