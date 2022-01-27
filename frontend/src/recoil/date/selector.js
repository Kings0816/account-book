import { selector } from 'recoil';

import { dateState } from './atom';

export const shapedDateState = selector({
    key: 'shapedDateState',
    get: ({ get }) => {
        const { year, month } = get(dateState);

        const nowDate = new Date(year, month);
        const convertedYear = nowDate.getFullYear();
        const convertedMonth = nowDate.getMonth() + 1;

        return `${convertedYear}년 ${convertedMonth}월`;
    },
});
