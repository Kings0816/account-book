import React from 'react';
import { Wrapper, Logo } from './style';
import emptyImg from '../../../public/assets/empty.svg';

const EmptyBox = () => {
    return (
        <Wrapper>
            <Logo aria-label="empty" src={emptyImg} />
        </Wrapper>
    );
};

export default EmptyBox;
