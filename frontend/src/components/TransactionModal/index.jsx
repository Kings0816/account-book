import React from 'react';
import { useRecoilValue } from 'recoil';

import TransactionForm from '../TransactionForm';
import { modalState } from '../../recoil/modal/atom';
import { Wrapper, BackgroundDim } from './style';

const TransactionModal = () => {
    const modal = useRecoilValue(modalState);

    if (modal.props == null) return null;
    return (
        <Wrapper active={modal.current === 'transaction'}>
            <BackgroundDim />
            <TransactionForm />
        </Wrapper>
    );
};

export default TransactionModal;
