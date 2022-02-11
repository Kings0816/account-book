import styled from 'styled-components';

import { MAX_MOBILE_DEVICE } from '../../utils/constant/device-size';

export const Wrapper = styled.div`
    visibility: ${(props) => (props.active ? 'visible' : 'hidden')};
`;

export const BackgroundDim = styled.div`
    position: fixed;
    z-index: 3;

    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`;

export const Items = styled.ul`
    z-index: 4;
    margin-top: 60px;
    position: absolute;
    width: 250px;
    max-height: 120px;
    overflow-y: scroll;

    border: 1px solid ${({ theme }) => theme.color.brigtenL1Gray};
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: ${({ theme }) => theme.shadow.pale};

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        margin-top: ${(props) => (props['aria-label'] === 'category' ? '47.2vh' : '73.3vh')};
        width: 80vw;
        top: 0;
    }
`;

export const Item = styled.li`
    margin: 0 auto;
    padding: 10px 0;
    width: 90%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid #d7d7d7;
    font-weight: normal;

    & > button {
        border-bottom: none;
        font-weight: bold;
    }

    &:hover {
        transform: scale(1.01);
        background: ${({ theme }) => theme.color.brigtenL2Gray};
        cursor: pointer;
    }

    &:last-child {
        border-bottom: none;
    }
`;
