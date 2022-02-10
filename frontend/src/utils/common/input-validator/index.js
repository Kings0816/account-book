export const dateFormat = {
    rule: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])/,
    match: true,
    message: '날짜는 YYYY-MM-DD 형식으로 입력해야 합니다.',
};

export const CategoryFormat = {
    rule: /.+/,
    match: true,
    message: '카테고리를 선택해야 합니다.',
};

export const ContentFormat = {
    rule: /.+/,
    match: true,
    message: '내용은 최소 한 글자 이상 입력해야 합니다.',
};

export const MethodFormat = {
    rule: /.+/,
    match: true,
    message: '결제수단을 선택해야 합니다.',
};

export const CostFormat = {
    rule: /^[0-9]{1,}$/,
    match: true,
    message: '한자리 이상의 숫자만 입력해야 합니다.(콤마는 입력하지 않습니다.)',
};

export const formatValidator = (format, target) => {
    const isValid = format.rule.test(target) === format.match;
    return isValid ? '유효한 결과 값입니다.' : format.message;
};
