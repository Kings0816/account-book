import { atom } from 'recoil';

import { entireTransaction } from '../../dummy/transaction';

export const transactionState = atom({
    key: 'transactionState',
    default: entireTransaction,
});
