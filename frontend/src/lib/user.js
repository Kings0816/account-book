import axios from 'axios';

// TODO 필요한 헤더는 추가하기
const instance = axios.create({
    baseURL: process.env.API_SERVER + '/user',
});

export const postLogin = async (code) => {
    try {
        const response = await instance.post('/', {
            code,
        });
        return response.data.data;
    } catch (e) {
        // TODO 에러 발생 알림창 띄우기
        console.log(e);
    }
};
