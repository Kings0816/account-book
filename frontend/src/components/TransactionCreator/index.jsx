import React from 'react';

import { useModal } from '../../hooks/useModal';
import fabImg from '../../../public/assets/fab-button.svg';
import { CreatorContainer, Creator, Fab } from './style';

const initData = {
    category: '',
    color: '',
    content: '',
    method: '',
    sign: '+',
    cost: '',
    date: '',
};

const TransactionCreator = () => {
    const { openModal } = useModal();

    return (
        <>
            <CreatorContainer>
                <Creator type="button" onClick={() => openModal('createTransaction', initData)}>
                    내역 추가하기
                </Creator>
            </CreatorContainer>
            <Fab>
                <button type="button" onClick={() => openModal('createTransaction', initData)}>
                    <img src={fabImg} />
                </button>
            </Fab>
        </>
    );
};

export default TransactionCreator;
