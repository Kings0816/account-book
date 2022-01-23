import CategoryService from '../service/category-service.js';

const getCategories = async (req, res) => {
    try {
        const result = await CategoryService.getCategories();
        // TODO 에러 유무에 따라 분기처리 하기
        res.status(200).json({
            data: result.data,
        });
    } catch (e) {
        res.status(500).json({
            data: '카테고리를 가져오는 중 서버에서 오류가 발생했습니다.',
        });
    }
};

export default {
    getCategories,
};
