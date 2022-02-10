import {
    dateFormat,
    CategoryFormat,
    ContentFormat,
    MethodFormat,
    CostFormat,
    formatValidator,
} from './index';
import {
    VALID_INPUT,
    INVALID_DATE,
    INVALID_CATEGORY,
    INVALID_CONTENT,
    INVALID_METHOD,
    INVALID_COST,
} from '../../constant/valid-message';

describe('입력값 검증로직 테스트', () => {
    it('날짜 값이 YYYY-MM-DD 형식에 유효한지 결과를 반환한다.', () => {
        expect(formatValidator(dateFormat, '202-02-11')).toEqual(INVALID_DATE);
        expect(formatValidator(dateFormat, '2022-2-11')).toEqual(INVALID_DATE);
        expect(formatValidator(dateFormat, '2022-222-11')).toEqual(INVALID_DATE);
        expect(formatValidator(dateFormat, '2022-02-0')).toEqual(INVALID_DATE);
        expect(formatValidator(dateFormat, '2022-02-32')).toEqual(INVALID_DATE);
        expect(formatValidator(dateFormat, '2022-02-333')).toEqual(INVALID_DATE);

        const validDate = '2022-02-11';
        expect(formatValidator(dateFormat, validDate)).toEqual(VALID_INPUT);
    });

    it('카테고리가 최소 한 글자 입력됐는지 결과를 반환한다.', () => {
        const inValidCategory = '';
        expect(formatValidator(CategoryFormat, inValidCategory)).toEqual(INVALID_CATEGORY);

        const validCategory = '식비';
        expect(formatValidator(CategoryFormat, validCategory)).toEqual(VALID_INPUT);
    });

    it('내용이 최소 한 글자 입력됐는지 결과를 반환한다.', () => {
        const inValidContent = '';
        expect(formatValidator(ContentFormat, inValidContent)).toEqual(INVALID_CONTENT);

        const validContent = '식비';
        expect(formatValidator(ContentFormat, validContent)).toEqual(VALID_INPUT);
    });

    it('결제수단이 최소 한 글자 입력됐는지 결과를 반환한다.', () => {
        const inValidMethod = '';
        expect(formatValidator(MethodFormat, inValidMethod)).toEqual(INVALID_METHOD);

        const validMethod = '토스';
        expect(formatValidator(MethodFormat, validMethod)).toEqual(VALID_INPUT);
    });

    it('가격이 컴마(,) 없이 숫자로만 입력됐는지 결과를 반환한다.', () => {
        let inValidCost = '';
        expect(formatValidator(CostFormat, inValidCost)).toEqual(INVALID_COST);
        inValidCost = '7,000';
        expect(formatValidator(CostFormat, inValidCost)).toEqual(INVALID_COST);

        const validCost = '7000';
        expect(formatValidator(CostFormat, validCost)).toEqual(VALID_INPUT);
    });
});
