import { convertDate } from '.';

describe('새로운 날짜를 올바른 형태로 반환하는 로직 테스트', () => {
    it('월이 0이하인 경우 해당 날짜의 년과 월을 변환하여 올바른 형태로 반환한다.', () => {
        const { convertedYear, convertedMonth } = convertDate(2022, 0);
        expect(convertedYear).toEqual(2021);
        expect(convertedMonth).toEqual(12);
    });

    it('월이 13이상인 경우 해당 날짜의 년과 월을 변환하여 올바른 형태로 반환한다.', () => {
        const { convertedYear, convertedMonth } = convertDate(2022, 13);
        expect(convertedYear).toEqual(2023);
        expect(convertedMonth).toEqual(1);
    });
});
