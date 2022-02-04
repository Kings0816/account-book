import { snapshot_UNSTABLE } from 'recoil';

import { dateState } from './atom';
import { shapedDateState, transactionsInDateState } from './selector';
import { transactionsWithDate } from '../../mocks/transactions';

describe('date Selectors 테스트', () => {
    it('shapedDateState(날짜 형태를 가공) Selector 테스트', () => {
        const initialSnapshot = snapshot_UNSTABLE();
        const initialState = {
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
        };
        const shapedDate = `${initialState.year}년 ${initialState.month}월`;
        expect(initialSnapshot.getLoadable(shapedDateState).valueOrThrow()).toBe(shapedDate);
    });

    it('transactionsInDateState(현재 날짜에 해당하는 거래내역을 반환) Selector 테스트', async () => {
        const testSnapshot = snapshot_UNSTABLE(({ set }) =>
            set(dateState, { year: 2022, month: 1 }),
        );
        const transactionsInDate = await testSnapshot
            .getLoadable(transactionsInDateState)
            .promiseOrThrow();
        expect(transactionsInDate).toEqual(transactionsWithDate['2022-1']);
    });
});
