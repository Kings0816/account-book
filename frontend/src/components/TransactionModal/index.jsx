import React from 'react';

import TransactionUpdateForm from '../TransactionUpdateForm';
import CategoryForm from '../CategoryCreateForm';
import { useModal } from '../../hooks/useModal';
import { useCategory } from './hooks';
import { Wrapper, BackgroundDim } from './style';

const TransactionModal = () => {
    const { isOpen, closeModal, getOpenModalByName } = useModal();
    const { addCategory } = useCategory(closeModal);

    const transactionModal = getOpenModalByName('transaction');
    const categoryModal = getOpenModalByName('createCategory');
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
            <CategoryForm
                active={isOpen('createCategory')}
                category={categoryModal?.props}
                onCreate={addCategory}
                onCancle={() => closeModal('createCategory')}
            />
        </Wrapper>
    );
};

export default TransactionModal;
