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

const updateTransaction = async (id, mid, cid, content, cost, sign, date) => {
    const sql = `
        UPDATE transaction 
        SET mid = ?, cid = ?, content = ?, cost = ?, sign = ?, date = ?
        WHERE id = ?`;
    await pool.query(sql, [mid, cid, content, cost, sign, date, id]);

    const [updatedTransaction] = await getTransactionById(id);
    return updatedTransaction;
};

const deleteTransaction = async (id) => {
    const sql = `DELETE FROM transaction WHERE id = ?`;
    await pool.query(sql, [id]);
    return;
};

export default {
    getTransactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
};
