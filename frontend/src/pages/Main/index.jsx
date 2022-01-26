import React from 'react';
import styled from 'styled-components';

import Header from '../../components/Header';

const Main = () => {
    return (
        <Wrapper>
            <Header />
        </Wrapper>
    );
};

export default Main;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
