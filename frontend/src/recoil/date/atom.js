import { atom } from 'recoil';

export const dateState = atom({
    key: 'dateState',
    default: {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
    },
});
