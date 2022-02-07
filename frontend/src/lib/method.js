import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.API_SERVER + '/methods',
});

export const getMethods = async () => {
    try {
        const response = await instance.get('/');
        return response.data;
    } catch (e) {
        // TODO 에러 발생 알림창 띄우기
        console.log(e);
    }
};
