import { makeDailyTransaction } from '.';
import { transactions } from '../../../mocks/transactions';

const TEST_DATA = transactions;

describe('일자별로 데이터를 나눠서 Map 형태로 반환하는 로직 테스트', () => {
    it('거래내역을 일자별로 데이터를 나눠서 Map 형태로 반환한다.', () => {
        const dailyTransactions = makeDailyTransaction(TEST_DATA);
        expect(dailyTransactions.size).toEqual(3);

        const sortedKeys = Array.from(dailyTransactions.keys()).sort(
            (a, b) => new Date(a) - new Date(b),
        );
        expect(sortedKeys).toEqual(['2022-01-09', '2022-01-17', '2022-01-28']);
    });
});
