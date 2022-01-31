import { selector } from 'recoil';

import { dateState } from './atom';

import { getTransactionsInDate } from '../../lib/transaction';

export const shapedDateState = selector({
    key: 'shapedDateState',
    get: ({ get }) => {
        const { year, month } = get(dateState);
        return `${year}년 ${month}월`;
    },
    set: ({ get, set }, newValue) => {
        const { year, month } = get(dateState);

        const nowDate = new Date(year, month - 1 + newValue);
        const convertedYear = nowDate.getFullYear();
        const convertedMonth = nowDate.getMonth() + 1;

        set(dateState, { year: convertedYear, month: convertedMonth });
    },
});

export const transactionsInDateState = selector({
    key: 'transactionsInDateState',
    get: async ({ get }) => {
        const { year, month } = get(dateState);

        const currentDate = `${year}-${month}`;

        // TODO recoil은 기본적으로 캐싱도 지원하기 때문에, sessionStorage 로직을 추가적으로 다듬기(제거 할 수도 있음)
        const cachedTransactions = JSON.parse(sessionStorage.getItem(currentDate));
        if (cachedTransactions == null) {
            const result = await getTransactionsInDate(year, month);
            result && sessionStorage.setItem(currentDate, JSON.stringify(result.data));
        }

        const trasactionsInDate = JSON.parse(sessionStorage.getItem(currentDate));
        return trasactionsInDate;
    },
});
