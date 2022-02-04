import { calculateIncome, calculateExpenditure } from '.';

import { transactions } from '../../../mocks/transactions';

describe('수입, 지출 금액 계산 테스트', () => {
    it('수입 거래내역에 대한 총 금액을 반환한다.', () => {
        const result = calculateIncome(transactions);
        expect(result).toEqual(300000);
    });

    it('지출 거래내역에 대한 총 금액을 반환한다.', () => {
        const result = calculateExpenditure(transactions);
        expect(result).toEqual(259200);
    });
});
