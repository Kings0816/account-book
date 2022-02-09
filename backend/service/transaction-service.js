import pool from '../database/connection.js';
import UserService from './user-service.js';

const getTransactionById = async (id) => {
    const sql = `
        SELECT transaction.id AS id, category.name AS category, color, content, method.name AS method, transaction.sign AS sign, cost, DATE_FORMAT(date, '%Y-%m-%d') AS date
        FROM transaction 
        LEFT JOIN method ON transaction.mid = method.id
        LEFT JOIN category ON transaction.cid = category.id
        WHERE transaction.id = ?`;
    const [row] = await pool.query(sql, [id]);
    return row;
};

const getTransactions = async (year, month, nickname) => {
    const [userId] = await UserService.getUserId(nickname);
    const sql = `
        SELECT transaction.id AS id, category.name AS category, color, content, method.name AS method, transaction.sign AS sign, cost, DATE_FORMAT(date, '%Y-%m-%d') AS date 
        FROM transaction 
        LEFT JOIN method ON transaction.mid = method.id 
        LEFT JOIN category ON transaction.cid = category.id 
        WHERE DATE_FORMAT(date,'%Y-%c') = ? AND transaction.uid = ?`;

    const date = `${year}-${month}`;
    const [row] = await pool.query(sql, [date, userId.id]);
    return row;
};

const addTransaction = async (nickname, mid, cid, content, cost, sign, date) => {
    const [userId] = await UserService.getUserId(nickname);

    const sql = `INSERT INTO transaction (uid, mid, cid, content, cost, sign, date) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const [result] = await pool.query(sql, [userId.id, mid, cid, content, cost, sign, date]);

    const [addedTransaction] = await getTransactionById(result.insertId);
    return addedTransaction;
};

const updateTransaction = () => {
    try {
        // TODO 거래내역을 업데이트하는 로직 처리하기
        const result = {
            status: 'success',
            data: '거래내역을 업데이트하는 로직 테스트 중입니다.',
        };
        return result;
    } catch (e) {
        return {
            status: 'error',
        };
    }
};

const deleteTransaction = () => {
    try {
        // TODO 거래내역을 삭제하는 로직 처리하기
        const result = {
            status: 'success',
            data: '거래내역을 삭제하는 로직 테스트 중입니다.',
        };
        return result;
    } catch (e) {
        return {
            status: 'error',
        };
    }
};

export default {
    getTransactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
};
