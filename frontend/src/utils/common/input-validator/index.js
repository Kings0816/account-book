import {
    VALID_INPUT,
    INVALID_DATE,
    INVALID_CATEGORY,
    INVALID_CONTENT,
    INVALID_METHOD,
    INVALID_COST,
} from '../../constant/valid-message';

export const dateFormat = {
    rule: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
    match: true,
    message: INVALID_DATE,
};

export const CategoryFormat = {
    rule: /.+/,
    match: true,
    message: INVALID_CATEGORY,
};

export const ContentFormat = {
    rule: /.+/,
    match: true,
    message: INVALID_CONTENT,
};

export const MethodFormat = {
    rule: /.+/,
    match: true,
    message: INVALID_METHOD,
};

export const CostFormat = {
    rule: /^[0-9]{1,}$/,
    match: true,
    message: INVALID_COST,
};

export const formatValidator = (format, target) => {
    const isValid = format.rule.test(target) === format.match;
    return isValid ? VALID_INPUT : format.message;
};
