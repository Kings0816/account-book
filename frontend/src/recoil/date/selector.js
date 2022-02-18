import { selector } from 'recoil';

import { dateState } from './atom';
import { convertDate } from '../../utils/common/convert-date';
import { getTransactionsInDate } from '../../lib/transaction';

export const shapedDateState = selector({
    key: 'shapedDateState',
    get: ({ get }) => {
        const { year, month } = get(dateState);
        return `${year}년 ${month}월`;
    },
    set: ({ get, set }, newValue) => {
        const { year, month } = get(dateState);
        const { convertedYear, convertedMonth } = convertDate(year, month + newValue);
        set(dateState, { year: convertedYear, month: convertedMonth });
    },
});

export const transactionsInDateState = selector({
    key: 'transactionsInDateState',
    get: async ({ get }) => {
        const { year, month } = get(dateState);

        const currentDate = `${year}-${month}`;

        const cachedTransactions = JSON.parse(sessionStorage.getItem(currentDate));
        if (cachedTransactions == null) {
            const result = await getTransactionsInDate(year, month);
            result && sessionStorage.setItem(currentDate, JSON.stringify(result.data));
        }

        const trasactionsInDate = JSON.parse(sessionStorage.getItem(currentDate));
        return trasactionsInDate;
    },
});
