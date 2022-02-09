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

const deleteTransaction = (req, res) => {
    try {
        const result = TransactionService.deleteTransaction();
        // TODO 에러 유무에 따라 분기처리 하기
        res.status(200).json({
            data: result.data,
        });
    } catch (e) {
        res.status(500).json({
            data: '거래내역을 삭제하는 중 서버에서 오류가 발생했습니다.',
        });
    }
};

export default {
    getTransactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
};
