export const makeDailyTransaction = (transactions) => {
    const dailyTransactions = new Map();

    transactions.forEach((transaction) => {
        const currentDate = transaction.date;
        if (dailyTransactions.has(currentDate)) {
            dailyTransactions.get(currentDate).push(transaction);
        } else dailyTransactions.set(currentDate, [transaction]);
    });

    return dailyTransactions;
};
