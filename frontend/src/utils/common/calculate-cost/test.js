import { calculateIncome, calculateExpenditure } from '.';
import { transactions } from '../../../mocks/transactions';

const INCOME = calculateIncome(transactions);
const EXPENDITURE = calculateExpenditure(transactions);

describe('수입, 지출 금액 계산 테스트', () => {
    it('수입 거래내역에 대한 총 금액을 반환한다.', () => {
        const result = calculateIncome(transactions);
        expect(result).toEqual(INCOME);
    });

    it('지출 거래내역에 대한 총 금액을 반환한다.', () => {
        const result = calculateExpenditure(transactions);
        expect(result).toEqual(EXPENDITURE);
    });
});
