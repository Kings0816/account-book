import React from 'react';

import TransactionUpdateForm from '../TransactionUpdateForm';
import CategoryForm from '../CategoryCreateForm';
import { useModal } from '../../hooks/useModal';
import { useCategory } from './hooks';
import { createTransaction } from '../../lib/transaction';
import { Wrapper, BackgroundDim } from './style';

const TransactionModal = () => {
    const { isOpen, closeModal, getOpenModalByName } = useModal();
    const { addCategory } = useCategory(closeModal);

    const transactionModal = getOpenModalByName('transaction');
    const categoryModal = getOpenModalByName('createCategory');
    if (transactionModal == null) return null;

    const updateTransaction = async ({ mid, cid, content, cost, sign, date }) => {
        const [year, month, day] = date.split('-');
        const transactionDate = `${year}-${month.replace(/(^0)+/i, '')}`;

        const result = await createTransaction(mid, cid, content, cost, sign, date);
        if (!result) return;

        const transactionsInDate = JSON.parse(sessionStorage.getItem(transactionDate));
        const updatedTransactions = [...transactionsInDate, result];
        sessionStorage.setItem(transactionDate, JSON.stringify(updatedTransactions));
    };

    return (
        <Wrapper active={transactionModal != null} data-testid="modal">
            <BackgroundDim data-testid="dim" />
            <TransactionUpdateForm
                transaction={transactionModal.props}
                onUpdate={updateTransaction}
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
