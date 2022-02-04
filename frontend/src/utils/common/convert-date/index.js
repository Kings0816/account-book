export const convertDate = (year, month) => {
    const nowDate = new Date(year, month - 1);
    const convertedYear = nowDate.getFullYear();
    const convertedMonth = nowDate.getMonth() + 1;
    return { convertedYear, convertedMonth };
};
