import CategoryService from '../service/category-service.js';

const getCategories = async (req, res) => {
    try {
        const { nickname } = req.query;
        const result = await CategoryService.getCategories(nickname);

        res.status(200).json({
            data: result,
        });
    } catch (e) {
        res.status(400).json({
            message: e.message,
        });
    }
};

const addCategory = async (req, res) => {
    try {
        const { nickname, name, color, sign } = req.body;
        const result = await CategoryService.addCategory(nickname, name, color, sign);

        res.status(200).json({
            data: result,
        });
    } catch (e) {
        const { message } = e;
        const statusCode = message === '이미 존재하는 카테고리 입니다.' ? 409 : 400;
        res.status(statusCode).json({
            message: e.message,
        });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.query;
        await CategoryService.deleteCategory(id);

        res.status(200).end();
    } catch (e) {
        res.status(400).json({
            message: e.message,
        });
    }
};

export default {
    getCategories,
    addCategory,
    deleteCategory,
};
