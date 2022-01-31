import pool from '../database/connection.js';

const getUserId = async (nickname) => {
    const sql = `SELECT id FROM user WHERE nickname = '${nickname}'`;
    const [row] = await pool.query(sql);
    return row;
};

const getTransactions = async (year, month, nickname) => {
    const [userId] = await getUserId(nickname);
    const sql = `
        SELECT category.name AS category, color, content, method.name AS method, transaction.sign AS sign, cost, DATE_FORMAT(date, '%Y-%m-%d') AS date 
        FROM transaction 
        LEFT JOIN method ON transaction.mid = method.id 
        LEFT JOIN category ON transaction.cid = category.id 
        WHERE DATE_FORMAT(date,'%Y-%c') = '${year}-${month}' AND transaction.uid = ${userId.id}`;

    const [row] = await pool.query(sql);
    return row;
};

const addTransaction = () => {
    try {
        // TODO 거래내역을 추가하는 로직 처리하기
        const result = {
            status: 'success',
            data: '거래내역을 추가하는 로직 테스트 중입니다.',
        };
        return result;
    } catch (e) {
        return {
            status: 'error',
        };
    }
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
