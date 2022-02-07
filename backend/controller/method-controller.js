import MethodService from '../service/method-service.js';

const getMethods = async (req, res) => {
    try {
        const result = await MethodService.getMethods();

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
    getMethods,
};
