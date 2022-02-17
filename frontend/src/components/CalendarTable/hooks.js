import { useRecoilValue } from 'recoil';
import moment from 'moment';

import { dateState } from '../../recoil/date/atom';

const OVER_WEEK = 53;

export const useWeek = () => {
    const currentDate = useRecoilValue(dateState);

    const baseDay = moment(`${currentDate.year}-${currentDate.month}-1`);
    const firstWeek = baseDay.clone().startOf('month').week();
    const preLastWeek = baseDay.clone().endOf('month').week();
    const lastWeek = preLastWeek === 1 ? OVER_WEEK : preLastWeek;

    return { currentDate, baseDay, firstWeek, lastWeek };
};
