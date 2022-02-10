import React from 'react';

import TransactionUpdateForm from '../TransactionUpdateForm';
import TransactionCreateForm from '../TransactionCreateForm';
import CategoryForm from '../CategoryCreateForm';
import { useModal } from '../../hooks/useModal';
import { useCategory, useUpdateTransactionHandler, useCreateTransactionHandler } from './hooks';
import { Wrapper, BackgroundDim } from './style';

const TransactionModal = () => {
    const { isOpen, closeModal, getOpenModalByName } = useModal();
    const { addCategory } = useCategory(closeModal);
    const { changeTransaction, removeTransaction } = useUpdateTransactionHandler(closeModal);
    const { addTransaction } = useCreateTransactionHandler(closeModal);

    const transactionUpdateModal = getOpenModalByName('updateTransaction');
    const transactionCreateModal = getOpenModalByName('createTransaction');
    const categoryModal = getOpenModalByName('createCategory');

    return (
        <Wrapper active={transactionUpdateModal || transactionCreateModal} data-testid="modal">
            <BackgroundDim data-testid="dim" />
            {transactionUpdateModal && (
                <TransactionUpdateForm
                    transaction={transactionUpdateModal.props}
                    onUpdate={changeTransaction}
                    onDelete={removeTransaction}
                    onCancle={() => closeModal('updateTransaction')}
                />
            )}
            {transactionCreateModal && (
                <TransactionCreateForm
                    transaction={transactionCreateModal.props}
                    onCreate={addTransaction}
                    onCancle={() => closeModal('createTransaction')}
                />
            )}
            {categoryModal && (
                <CategoryForm
                    active={isOpen('createCategory')}
                    category={categoryModal.props}
                    onCreate={addCategory}
                    onCancle={() => closeModal('createCategory')}
                />
            )}
        </Wrapper>
    );
};

export default TransactionModal;
