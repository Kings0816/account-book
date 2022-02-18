import { useRecoilValue, useSetRecoilState } from 'recoil';

import { useRefreshTransaction } from '../../hooks/useRefreshTransaction';
import { methodState } from '../../recoil/method/atom';
import { categoryState } from '../../recoil/category/atom';
import { createCategory } from '../../lib/category';
import { createTransaction, updateTransaction, deleteTransaction } from '../../lib/transaction';

export const useCategory = (closeModal) => {
    const setCategories = useSetRecoilState(categoryState);

    const addCategory = async (category) => {
        const newCategory = await createCategory(category.name, category.color, category.sign);
        newCategory && setCategories(newCategory);
        closeModal('createCategory');
    };

    return { addCategory };
};

export const useTransactionHandler = (closeModal) => {
    const methods = useRecoilValue(methodState);
    const categories = useRecoilValue(categoryState);
    const { refreshTransaction } = useRefreshTransaction();

    const addTransaction = async ({ method, category, content, cost, sign, date }) => {
        const [year, month, _] = date.split('-');
        const transactionDate = `${year}-${month.replace(/(^0)+/i, '')}`;

        const [methodInfo] = methods.filter((_method) => _method.name === method);
        const [categoryInfo] = categories.filter((_category) => _category.name === category);
        const result = await createTransaction(
            methodInfo.id,
            categoryInfo.id,
            content,
            cost,
            sign,
            date,
        );
        if (!result) return;

        const transactionsInDate = JSON.parse(sessionStorage.getItem(transactionDate));
        const updatedTransactions = [...transactionsInDate, result];
        sessionStorage.setItem(transactionDate, JSON.stringify(updatedTransactions));
        closeModal('createTransaction');
        refreshTransaction();
    };

    const changeTransaction = async ({ id, method, category, content, cost, sign, date }) => {
        const [year, month, _] = date.split('-');
        const transactionDate = `${year}-${month.replace(/(^0)+/i, '')}`;

        const [methodInfo] = methods.filter((_method) => _method.name === method);
        const [categoryInfo] = categories.filter((_category) => _category.name === category);
        const result = await updateTransaction(
            id,
            methodInfo.id,
            categoryInfo.id,
            content,
            cost,
            sign,
            date,
        );
        if (!result) return;

        const transactionsInDate = JSON.parse(sessionStorage.getItem(transactionDate));
        const updatedTransactions = transactionsInDate.filter(
            (transaction) => transaction.id !== id,
        );
        sessionStorage.setItem(transactionDate, JSON.stringify([...updatedTransactions, result]));
        closeModal('updateTransaction');
        refreshTransaction();
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
        closeModal('updateTransaction');
        refreshTransaction();
    };

    return { addTransaction, changeTransaction, removeTransaction };
};
