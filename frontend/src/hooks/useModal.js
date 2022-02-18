import { useRecoilState } from 'recoil';

import { modalState } from '../recoil/modal/atom';

// TODO selector로 옮길 수 있는 로직은 옮기자(ex. selectFamily)
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
