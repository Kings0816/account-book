import React from 'react';
import { useRecoilState } from 'recoil';

import TransactionUpdateForm from '../TransactionUpdateForm';
import { modalState } from '../../recoil/modal/atom';
import { Wrapper, BackgroundDim } from './style';

const TransactionModal = () => {
    const [modal, setModal] = useRecoilState(modalState);

    const closeModal = () => {
        setModal({ current: null, props: null });
    };

    if (modal.props == null) return null;
    return (
        <Wrapper active={modal.current === 'transaction'}>
            <BackgroundDim />
            <TransactionUpdateForm
                modal={modal}
                onUpdate={''}
                onDelete={''}
                onCancle={closeModal}
            />
        </Wrapper>
    );
};

export default TransactionModal;
