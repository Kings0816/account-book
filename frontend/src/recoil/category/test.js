import { snapshot_UNSTABLE } from 'recoil';

import { categoryState } from './atom';
import { filteredCategoryState } from './selector';

const TEST_DATA = [
    { id: 1, name: '미분류', color: '#817DCE', sign: 'all' },
    { id: 2, name: '카페/간식', color: '#D092E2', sign: '-' },
    { id: 4, name: '용돈', color: '#E6D267', sign: '+' },
    { id: 5, name: '교통', color: '#94D3CC', sign: '-' },
    { id: 10, name: '월급', color: '#B9D58C', sign: '+' },
    { id: 13, name: '식비', color: '#4CA1DE', sign: '-' },
    { id: 14, name: '여행/숙박', color: '#E2B765', sign: '-' },
    { id: 28, name: '여가/취미', color: '#B9D58C', sign: '-' },
    { id: 29, name: '교육', color: '#F4A460', sign: '-' },
];
const INCOME_DATA = [
    { id: 2, name: '카페/간식', color: '#D092E2', sign: '-' },
    { id: 5, name: '교통', color: '#94D3CC', sign: '-' },
    { id: 13, name: '식비', color: '#4CA1DE', sign: '-' },
    { id: 14, name: '여행/숙박', color: '#E2B765', sign: '-' },
    { id: 28, name: '여가/취미', color: '#B9D58C', sign: '-' },
    { id: 29, name: '교육', color: '#F4A460', sign: '-' },
];
const INCOME = '-';

describe('category Selectors 테스트', () => {
    it('filteredCategoryState(수입 카테고리 영역만 필터링해주는) Selector 테스트', async () => {
        const testSnapshot = snapshot_UNSTABLE(({ set }) => set(categoryState, TEST_DATA));
        const result = testSnapshot.getLoadable(filteredCategoryState(INCOME)).valueOrThrow();
        expect(result).toEqual(INCOME_DATA);
    });
});
