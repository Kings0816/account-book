export const calculateIncome = (transactions) => {
    return transactions
        .filter((transaction) => transaction.sign === '+')
        .reduce((acc, transaction) => acc + parseInt(transaction.cost), 0);
};

export const calculateExpenditure = (transactions) => {
    return transactions
        .filter((transaction) => transaction.sign === '-')
        .reduce((acc, transaction) => acc + parseInt(transaction.cost), 0);
};
