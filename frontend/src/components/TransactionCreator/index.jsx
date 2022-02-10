import React from 'react';

import fabImg from '../../../public/assets/fab-button.svg';
import { CreatorContainer, Creator, Fab } from './style';

const TransactionCreator = () => {
    return (
        <>
            <CreatorContainer>
                <Creator type="button" onClick={() => console.log(111)}>
                    내역 추가하기
                </Creator>
            </CreatorContainer>
            <Fab>
                <button type="button" onClick={() => console.log(111)}>
                    <img src={fabImg} />
                </button>
            </Fab>
        </>
    );
};

export default TransactionCreator;
