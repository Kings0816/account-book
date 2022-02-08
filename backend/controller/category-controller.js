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

export default {
    getCategories,
};
