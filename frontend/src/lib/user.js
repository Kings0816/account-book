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
        // TODO UX를 고려해서 토스트 띄우는 것으로 변경하기
        alert('로그인에 실패했습니다.');
    }
};
