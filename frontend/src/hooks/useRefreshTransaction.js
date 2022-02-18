import { useRecoilRefresher_UNSTABLE } from 'recoil';

import { transactionsInDateState } from '../recoil/date/selector';

export const useRefreshTransaction = () => {
    const refresh = useRecoilRefresher_UNSTABLE(transactionsInDateState);

    const refreshTransaction = () => {
        refresh();
    };

    return { refreshTransaction };
};
