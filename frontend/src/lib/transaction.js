import axios from 'axios';

// TODO 필요한 헤더는 추가하기
const instance = axios.create({
    baseURL: process.env.API_SERVER + '/transactions',
});

export const getTransactionsInDate = async (year, month) => {
    try {
        const nickname = sessionStorage.getItem('nickname');
        const response = await instance.get(`?year=${year}&month=${month}&nickname=${nickname}`);
        return response.data;
    } catch (e) {
        // TODO 에러 발생 알림창 띄우기
        console.log(e);
    }
};

export const createTransaction = async (mid, cid, content, cost, sign, date) => {
    try {
        const nickname = sessionStorage.getItem('nickname');
        const response = await instance.post(`/`, {
            nickname,
            mid,
            cid,
            content,
            cost,
            sign,
            date,
        });
        return response.data.data;
    } catch (e) {
        // TODO 에러 발생 알림창 띄우기
        console.log(e);
    }
};

export const updateTransaction = async (id, mid, cid, content, cost, sign, date) => {
    try {
        const response = await instance.patch(`/`, {
            id,
            mid,
            cid,
            content,
            cost,
            sign,
            date,
        });
        return response.data.data;
    } catch (e) {
        // TODO 에러 발생 알림창 띄우기
        console.log(e);
    }
};

export const deleteTransaction = async (id) => {
    try {
        const result = await instance.delete(`?id=${id}`);
        const COMPLETE = result.status === 200;
        return COMPLETE;
    } catch (e) {
        // TODO 에러 발생 알림창 띄우기
        console.log(e);
    }
};
