import UserService from '../service/user-service.js';

const login = async (req, res) => {
    try {
        const { code } = req.body;
        const result = await UserService.proccedLogin(code);

        res.status(200).json({
            data: result,
        });
    } catch (e) {
        res.status(400).json({
            message: e.message,
        });
    }
};

const logout = (req, res) => {
    try {
        const result = UserService.logout();
        // TODO 에러 유무에 따라 분기처리 하기
        res.status(200).json({
            data: result.data,
        });
    } catch (e) {
        res.status(400).json({
            data: '로그아웃 처리 중 서버에서 오류가 발생했습니다.',
        });
    }
};

export default {
    login,
    logout,
};
