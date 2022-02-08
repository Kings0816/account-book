import pool from '../database/connection.js';
import UserService from './user-service.js';

const getCategories = async (nickname) => {
    const [userId] = await UserService.getUserId(nickname);
    const sql = `
        SELECT id, name, color, sign 
        FROM category 
        WHERE uid = ?`;
    const [row] = await pool.query(sql, [userId.id]);
    return row;
};

export default {
    getCategories,
};
