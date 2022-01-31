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
