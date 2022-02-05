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
        <Wrapper active={modal.current === 'transaction'} data-testid="modal">
            <BackgroundDim data-testid="dim" />
            <TransactionUpdateForm
                modal={modal}
                onUpdate={() => null}
                onDelete={() => null}
                onCancle={closeModal}
            />
        </Wrapper>
    );
};

export default TransactionModal;
