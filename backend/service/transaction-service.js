const getTransactions = () => {
    try {
        // TODO 거래내역들을 갖고 오는 로직 처리하기
        const result = {
            status: 'success',
            data: '거래내역들을 갖고 오는 로직 테스트 중입니다.',
        };
        return result;
    } catch (e) {
        return {
            status: 'error',
        };
    }
};

const addTransaction = () => {
    try {
        // TODO 거래내역을 추가하는 로직 처리하기
        const result = {
            status: 'success',
            data: '거래내역을 추가하는 로직 테스트 중입니다.',
        };
        return result;
    } catch (e) {
        return {
            status: 'error',
        };
    }
};

const updateTransaction = () => {
    try {
        // TODO 거래내역을 업데이트하는 로직 처리하기
        const result = {
            status: 'success',
            data: '거래내역을 업데이트하는 로직 테스트 중입니다.',
        };
        return result;
    } catch (e) {
        return {
            status: 'error',
        };
    }
};

const deleteTransaction = () => {
    try {
        // TODO 거래내역을 삭제하는 로직 처리하기
        const result = {
            status: 'success',
            data: '거래내역을 삭제하는 로직 테스트 중입니다.',
        };
        return result;
    } catch (e) {
        return {
            status: 'error',
        };
    }
};

export default {
    getTransactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
};
