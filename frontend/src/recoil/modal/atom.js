import { atom } from 'recoil';

export const modalState = atom({
    key: 'modalState',
    default: {
        current: null,
        props: null,
    },
});
