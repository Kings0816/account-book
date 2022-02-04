import { WEEK_DAY } from '../../constant/week';

export const dayInfo = (date) => {
    const [year, month, day] = date.split('-');
    const week = new Date(year, month - 1, day).getDay();
    const weekDay = WEEK_DAY[week];
    return { month, day, weekDay };
};
