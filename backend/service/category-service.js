import pool from '../database/connection.js';

const getCategories = async () => {
    try {
        // TODO 카테고리들을 갖고 오는 로직 처리하기
        const sql = `SELECT * FROM category`;
        const [row] = await pool.query(sql);
        const result = {
            status: 'success',
            data: row,
        };
        return result;
    } catch (e) {
        return {
            status: 'error',
        };
    }
};

export default {
    getCategories,
};
