import React from 'react';

import TransactionUpdateForm from '../TransactionUpdateForm';
import CategoryForm from '../CategoryCreateForm';
import { useModal } from '../../hooks/useModal';
import { useCategory, useTransactionHandler } from './hooks';
import { Wrapper, BackgroundDim } from './style';

const TransactionModal = () => {
    const { isOpen, closeModal, getOpenModalByName } = useModal();
    const { addCategory } = useCategory(closeModal);
    const { changeTransaction, removeTransaction } = useTransactionHandler();

    const transactionModal = getOpenModalByName('transaction');
    const categoryModal = getOpenModalByName('createCategory');
    if (transactionModal == null) return null;

    return (
        <Wrapper active={transactionModal != null} data-testid="modal">
            <BackgroundDim data-testid="dim" />
            <TransactionUpdateForm
                transaction={transactionModal.props}
                onUpdate={changeTransaction}
                onDelete={removeTransaction}
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
