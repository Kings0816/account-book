import { useRecoilState } from 'recoil';

import { modalState } from '../../recoil/modal/atom';

export const useModal = () => {
    const [modal, setModal] = useRecoilState(modalState);

    const closeModal = () => {
        setModal({ current: null, props: null });
    };

    return [modal, closeModal];
};
