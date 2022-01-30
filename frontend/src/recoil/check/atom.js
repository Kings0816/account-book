import { atom } from 'recoil';

export const checkState = atom({
    key: 'checkState',
    default: {
        totalCount: true,
        income: true,
        expenditure: true,
    },
});
