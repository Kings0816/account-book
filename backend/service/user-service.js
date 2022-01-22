const proccedLogin = () => {
    try {
        // TODO Github 로그인 로직 처리하기
        const result = {
            status: 'success',
            data: '로그인 테스트 중입니다.',
        };
        return result;
    } catch (e) {
        return {
            status: 'error',
        };
    }
};

const logout = () => {
    try {
        // TODO Github 로그아웃 로직 처리하기
        const result = {
            status: 'success',
            data: '로그아웃 테스트 중입니다.',
        };
        return result;
    } catch (e) {
        return {
            status: 'error',
        };
    }
};

export default {
    proccedLogin,
    logout,
};
