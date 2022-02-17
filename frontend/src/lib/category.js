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
        // TODO UX를 고려해서 토스트 띄우는 것으로 변경하기
        alert('카테고리를 불러오는데 실패했습니다.');
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

        return response.data.data;
    } catch (e) {
        // TODO UX를 고려해서 토스트 띄우는 것으로 변경하기
        const statusCode = e.response.status;
        if (statusCode === 409) {
            alert('중복된 카테고리입니다.');
            return;
        }
        alert('카테고리를 추가하는데 실패했습니다.');
    }
};

export const deleteCategory = async (id) => {
    try {
        const result = await instance.delete(`?id=${id}`);
        const COMPLETE = result.status === 200;
        return COMPLETE;
    } catch (e) {
        // TODO UX를 고려해서 토스트 띄우는 것으로 변경하기
        alert('카테고리를 삭제하는데 실패했습니다.');
    }
};
