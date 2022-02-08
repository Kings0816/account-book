import React from 'react';

import TransactionUpdateForm from '../TransactionUpdateForm';
import { useModal } from '../../hooks/useModal';
import { Wrapper, BackgroundDim } from './style';

const TransactionModal = () => {
    const { isOpen, closeModal, getOpenModalByName } = useModal();

    const transactionModal = getOpenModalByName('transaction');
    if (transactionModal == null) return null;

    return (
        <Wrapper active={transactionModal != null} data-testid="modal">
            <BackgroundDim data-testid="dim" />
            <TransactionUpdateForm
                transaction={transactionModal.props}
                onUpdate={() => null}
                onDelete={() => null}
                onCancle={() => closeModal('transaction')}
            />
        </Wrapper>
    );
};

export default TransactionModal;
