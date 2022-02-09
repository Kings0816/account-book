import { useSetRecoilState } from 'recoil';

import { categoryState } from '../../recoil/category/atom';
import { createCategory } from '../../lib/category';
import { updateTransaction, deleteTransaction } from '../../lib/transaction';

export const useCategory = (closeModal) => {
    const setCategories = useSetRecoilState(categoryState);

    const addCategory = async (category) => {
        const newCategory = await createCategory(category.name, category.color, category.sign);
        newCategory && setCategories(newCategory);
        closeModal('createCategory');
    };

    return { addCategory };
};

export const useTransactionHandler = () => {
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

    return { changeTransaction, removeTransaction };
};
