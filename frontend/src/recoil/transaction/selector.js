import { selector } from 'recoil';

import { transactionState } from './atom';
import { dateState } from '../date/atom';

export const transactionsInDateState = selector({
    key: 'transactionsInDateState',
    get: ({ get }) => {
        const { year, month } = get(dateState);
        const transactions = get(transactionState);

        const notExistedData = {};
        const trasactionsInDate = transactions[`${year}-${month}`] || notExistedData;

        return trasactionsInDate;
    },
});
