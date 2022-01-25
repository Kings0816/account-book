import axios from 'axios';
import jwt from 'jsonwebtoken';
import pool from '../database/connection.js';

const makeJwt = (id, login) => {
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

const getUser = async (login) => {
    const sql = 'SELECT email, nickname FROM user WHERE nickname = ?';
    const [user] = await pool.query(sql, [login]);
    return user;
};

const addUser = async (login, email) => {
    const sql = 'INSERT INTO user(email, nickname) VALUES(?,?)';
    const _email = email != null ? email : '미공개';
    await pool.query(sql, [_email, login]);
    return await getUser(login);
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

    const { id, login, email } = githubUserInfo.data;
    const userJwt = makeJwt(id, login);
    const user = await getUser(login);
    if (user.length === 0) {
        await addUser(login, email);
    }

    return {
        userJwt,
        nickname: login,
    };
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
