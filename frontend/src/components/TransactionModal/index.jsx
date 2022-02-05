import React from 'react';

import TransactionUpdateForm from '../TransactionUpdateForm';
import { useModal } from './hooks';
import { Wrapper, BackgroundDim } from './style';

const TransactionModal = () => {
    const [modal, closeModal] = useModal();

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
