import { dayInfo } from '.';

const TEST_DATE = '1997-11-18';

describe('날짜에 따른 월, 일, 요일 변환 테스트', () => {
    it('날짜에 맞는 월, 일, 요일을 반환한다.', () => {
        const { month, day, weekDay } = dayInfo(TEST_DATE);
        expect(month).toEqual('11');
        expect(day).toEqual('18');
        expect(weekDay).toEqual('화');
    });
});
