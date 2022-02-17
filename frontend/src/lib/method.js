import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.API_SERVER + '/methods',
});

export const getMethods = async () => {
    try {
        const response = await instance.get('/');
        return response.data;
    } catch (e) {
        // TODO UX를 고려해서 토스트 띄우는 것으로 변경하기
        alert('결제수단을 가져오는데 실패했습니다.');
    }
};
