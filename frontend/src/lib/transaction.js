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
        // TODO UX를 고려해서 토스트 띄우는 것으로 변경하기
        alert('거래내역을 가져오는데 실패했습니다.');
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
        // TODO UX를 고려해서 토스트 띄우는 것으로 변경하기
        alert('거래내역을 추가하는데 실패했습니다.');
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
        // TODO UX를 고려해서 토스트 띄우는 것으로 변경하기
        alert('거래내역을 수정하는데 실패했습니다.');
    }
};

export const deleteTransaction = async (id) => {
    try {
        const result = await instance.delete(`?id=${id}`);
        const COMPLETE = result.status === 200;
        return COMPLETE;
    } catch (e) {
        // TODO UX를 고려해서 토스트 띄우는 것으로 변경하기
        alert('거래내역을 삭제하는데 실패했습니다.');
    }
};
