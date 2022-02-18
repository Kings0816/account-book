import { useRecoilState } from 'recoil';

import { modalState } from '../recoil/modal/atom';

export const useModal = () => {
    const [modals, setModal] = useRecoilState(modalState);

    const openModal = (name, props) => {
        setModal((prev) => [...prev, { name, props }]);
    };

    const closeModal = (name) => {
        setModal((prev) => prev.filter((_prev) => _prev.name !== name));
    };

    const getOpenModalByName = (name) => {
        return modals.find((modal) => modal.name === name);
    };

    const isOpen = (name) => {
        return getOpenModalByName(name) != null;
    };

    return { modals, isOpen, openModal, closeModal, getOpenModalByName };
};
