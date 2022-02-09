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

const addCategory = async (nickname, name, color, sign) => {
    const categories = await getCategories(nickname);
    const existCategoryInSameName = categories.filter((category) => category.name === name);
    if (existCategoryInSameName.length !== 0) throw new Error('이미 존재하는 카테고리 입니다.');

    const [userId] = await UserService.getUserId(nickname);
    const sql = `INSERT INTO category (uid, name, color, sign) VALUES (?, ?, ?, ?)`;
    await pool.query(sql, [userId.id, name, color, sign]);

    const updatedCategories = await getCategories(nickname);
    return updatedCategories;
};

const deleteCategory = async (id) => {
    const sql = `DELETE FROM category WHERE id = ?`;
    await pool.query(sql, [id]);
    return;
};

export default {
    getCategories,
    addCategory,
    deleteCategory,
};
