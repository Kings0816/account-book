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
});
