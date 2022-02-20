import styled from 'styled-components';

import { MAX_MOBILE_DEVICE } from '../../utils/constant/device-size';

export const Wrapper = styled.form`
    position: fixed;
    z-index: 2;

    width: 700px;
    height: 500px;
    min-width: 228px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.color.white};
    box-shadow: ${({ theme }) => theme.shadow.thick};

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        position: absolute;

        width: 100vw;
        height: ${(props) => (props.mobileHeight ? props.mobileHeight + 'px' : '100vh')};
        top: 0;
        left: 0;
        transform: none;
        overflow-y: auto;

        justify-content: space-evenly;

        box-shadow: none;
    }
`;

export const CostType = styled.div`
    width: 250px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        width: 80vw;
        height: 8%;
        min-height: 8%;
    }
`;

export const TypeButton = styled.button`
    margin: 0px 5px 5px 0px;
    width: 57px;
    height: 37px;

    font-weight: bold;
    border: 2px solid
        ${({ theme }) =>
            (props) =>
                props.active ? theme.color.mint : theme.color.brigtenL1Gray};
    color: ${({ theme }) =>
        (props) =>
            props.active ? theme.color.mint : theme.color.brigtenL1Gray};
`;

export const Element = styled.div`
    margin-bottom: 10px;
    width: 250px;

    display: flex;
    flex-direction: column;

    font-weight: bold;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        width: 80vw;
        height: 11%;
        min-height: 11%;

        justify-content: center;
    }
`;

export const BackImg = styled.img`
    float: left;
`;

export const Input = styled.input`
    margin-top: 5px;
    padding: 10px;

    border: 1px solid ${({ theme }) => theme.color.brigtenL1Gray};
    border-radius: 5px;
    background: ${({ theme }) => theme.color.whiteSmoke};

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        height: 80%;
    }
`;

export const ButtonContainer = styled.div`
    width: 250px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        width: 80vw;
        height: 11%;
        min-height: 11%;
    }
`;

export const DecisionButton = styled.button`
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.default};
    color: ${(props) => (props.action === 'update' ? '#0990d6' : '#ff000f')};
    opacity: ${(props) => (props.active ? 1 : 0.37)};
`;
