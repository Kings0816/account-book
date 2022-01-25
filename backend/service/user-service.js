import axios from 'axios';
import jwt from 'jsonwebtoken';

const makeJwt = ({ id, login }) => {
    const payload = {
        id,
        username: login,
    };

    const jwtSecret = process.env.JWT_SECRET;
    const options = {
        expiresIn: '1d',
        issuer: 'junhyuk-account-book.com',
        subject: 'userInfo',
    };
    const userJwt = jwt.sign(payload, jwtSecret, options);

    return userJwt;
};

const proccedLogin = async (code) => {
    const tokenUrl = process.env.TOKEN_URL + `&code=${code}`;

    const { data } = await axios.post(tokenUrl);
    const accessToken = new URLSearchParams(data).get('access_token');
    if (accessToken == null) throw new Error('access_token 조회에 실패했습니다.');

    const profileUrl = 'https://api.github.com/user';
    const githubUserInfo = await axios.get(profileUrl, {
        headers: {
            Authorization: `token ${accessToken}`,
        },
    });

    const userJwt = makeJwt(githubUserInfo.data);

    return userJwt;
};

const logout = () => {
    // TODO Github 로그아웃 로직 처리하기
    const result = {
        status: 'success',
        data: '로그아웃 테스트 중입니다.',
    };
    return result;
};

export default {
    proccedLogin,
    logout,
};
