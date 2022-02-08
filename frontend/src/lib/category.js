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

export const createCategory = async (name, color, sign) => {
    try {
        const nickname = sessionStorage.getItem('nickname');
        const response = await instance.post(`/`, {
            nickname,
            name,
            color,
            sign,
        });

        return response.data;
    } catch (e) {
        // TODO 에러 발생 알림창 띄우기
        console.log(e);
    }
};

export const deleteCategory = async (id) => {
    try {
        const result = await instance.delete(`?id=${id}`);
        const COMPLETE = result.status === 200;
        return COMPLETE;
    } catch (e) {
        // TODO 에러 발생 알림창 띄우기
        console.log(e);
    }
};
