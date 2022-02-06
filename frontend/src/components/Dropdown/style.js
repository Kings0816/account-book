import styled from 'styled-components';

export const Wrapper = styled.ul`
    z-index: 3;
    margin-top: 60px;
    position: absolute;
    width: 250px;

    visibility: ${(props) => (props.active ? 'none' : 'hidden')};

    border: 1px solid ${({ theme }) => theme.color.brigtenL1Gray};
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: ${({ theme }) => theme.shadow.pale};
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
`;
