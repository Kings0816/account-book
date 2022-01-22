import UserService from '../service/user-service.js';

const login = (req, res) => {
    try {
        const result = UserService.proccedLogin();
        // TODO 에러 유무에 따라 분기처리 하기
        res.status(200).json({
            data: result.data,
        });
    } catch (e) {
        res.status(500).json({
            data: '로그인 처리 중 서버에서 에러가 발생했습니다.',
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
        res.status(500).json({
            data: '로그아웃 처리 중 서버에서 오류가 발생했습니다.',
        });
    }
};

export default {
    login,
    logout,
};
