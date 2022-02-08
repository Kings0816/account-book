import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.API_SERVER + '/categories',
});

export const getCategories = async () => {
    try {
        const nickname = sessionStorage.getItem('nickname');
        const response = await instance.get(`?nickname=${nickname}`);

        return response.data;
    } catch (e) {
        // TODO 에러 발생 알림창 띄우기
        console.log(e);
    }
};
