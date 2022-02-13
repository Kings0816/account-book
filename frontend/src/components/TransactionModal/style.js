import styled from 'styled-components';

export const Wrapper = styled.div`
    display: ${(props) => (props.active ? 'block' : 'none')};

    @media screen and (max-width: ${MAX_MOBILE_DEVICE}px) {
        overflow-y: auto;
    }
`;

export const BackgroundDim = styled.div`
    position: fixed;
    z-index: 1;

    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    background-color: ${({ theme }) => theme.color.black};
    opacity: 0.57;
`;
