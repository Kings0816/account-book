import TransactionService from '../service/transaction-service.js';

const getTransactions = async (req, res) => {
    try {
        const { year, month, nickname } = req.query;
        const result = await TransactionService.getTransactions(year, month, nickname);

        res.status(200).json({
            data: result,
        });
    } catch (e) {
        res.status(400).json({
            message: e.message,
        });
    }
};

const addTransaction = async (req, res) => {
    try {
        const { nickname, mid, cid, content, cost, sign, date } = req.body;
        const result = await TransactionService.addTransaction(
            nickname,
            mid,
            cid,
            content,
            cost,
            sign,
            date,
        );

        res.status(200).json({
            data: result,
        });
    } catch (e) {
        res.status(400).json({
            message: e.message,
        });
    }
};

const updateTransaction = async (req, res) => {
    try {
        const { id, mid, cid, content, cost, sign, date } = req.body;
        const result = await TransactionService.updateTransaction(
            id,
            mid,
            cid,
            content,
            cost,
            sign,
            date,
        );

        res.status(200).json({
            data: result,
        });
    } catch (e) {
        res.status(400).json({
            message: e.message,
        });
    }
};

const deleteTransaction = async (req, res) => {
    try {
        const { id } = req.query;
        await TransactionService.deleteTransaction(id);

        res.status(200).end();
    } catch (e) {
        res.status(400).json({
            message: e.message,
        });
    }
};

export default {
    getTransactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
};
