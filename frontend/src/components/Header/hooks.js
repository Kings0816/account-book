import { useRecoilState } from 'recoil';

import { useModal } from '../../hooks/useModal';
import { shapedDateState } from '../../recoil/date/selector';

export const useShapedDate = () => {
    const { closeModal } = useModal();
    const [shapedDate, setShapedDate] = useRecoilState(shapedDateState);

    const changeDate = (sign) => {
        const [NEXT, PREV] = [1, -1];
        const value = sign === '+' ? NEXT : PREV;
        setShapedDate(value);
        closeModal('categoryTransaction');
    };

    return [shapedDate, changeDate];
};
