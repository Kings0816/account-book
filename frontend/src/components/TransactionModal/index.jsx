import React from 'react';

import TransactionUpdateForm from '../TransactionUpdateForm';
import CategoryForm from '../CategoryCreateForm';
import { useModal } from '../../hooks/useModal';
import { useCategory } from './hooks';
import { updateTransaction, deleteTransaction } from '../../lib/transaction';
import { Wrapper, BackgroundDim } from './style';

const TransactionModal = () => {
    const { isOpen, closeModal, getOpenModalByName } = useModal();
    const { addCategory } = useCategory(closeModal);

    const transactionModal = getOpenModalByName('transaction');
    const categoryModal = getOpenModalByName('createCategory');
    if (transactionModal == null) return null;

    const changeTransaction = async ({ id, mid, cid, content, cost, sign, date }) => {
        const [year, month, _] = date.split('-');
        const transactionDate = `${year}-${month.replace(/(^0)+/i, '')}`;

        const result = await updateTransaction(id, mid, cid, content, cost, sign, date);
        if (!result) return;

        const transactionsInDate = JSON.parse(sessionStorage.getItem(transactionDate));
        const updatedTransactions = transactionsInDate.filter(
            (transaction) => transaction.id !== id,
        );
        sessionStorage.setItem(transactionDate, JSON.stringify([...updatedTransactions, result]));
    };

    const removeTransaction = async (id, date) => {
        const [year, month, _] = date.split('-');
        const transactionDate = `${year}-${month.replace(/(^0)+/i, '')}`;

        const complete = await deleteTransaction(id);
        if (!complete) return;

        const transactionsInDate = JSON.parse(sessionStorage.getItem(transactionDate));
        const updatedTransactions = transactionsInDate.filter(
            (transaction) => transaction.id !== id,
        );
        sessionStorage.setItem(transactionDate, JSON.stringify(updatedTransactions));
    };

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
