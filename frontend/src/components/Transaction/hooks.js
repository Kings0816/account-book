import { useSetRecoilState } from 'recoil';

import { modalState } from '../../recoil/modal/atom';

export const useCurrentModal = (transaction) => {
    const setCurrentModal = useSetRecoilState(modalState);

    const changeModalState = () => {
        const state = {
            current: 'transaction',
            props: transaction,
        };
        setCurrentModal(state);
    };

    return [changeModalState];
};
