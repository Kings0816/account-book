import React from 'react';
import { nanoid } from 'nanoid';

import deleteImg from '../../../public/assets/delete-button.svg';
import { BackgroundDim, Wrapper, Items, Item } from './style';

const Dropdown = ({
    name,
    data,
    active,
    activeToggle,
    changeHandler,
    deleteHandler,
    createHandler,
}) => {
    const dimHandler = () => {
        activeToggle();
    };

    const items = data.map((_data) => (
        <Item key={nanoid()} onClick={changeHandler}>
            <span>{_data.name}</span>
            {deleteHandler && (
                <img src={deleteImg} onClick={(e) => deleteHandler(_data.id, e)} alt="delete" />
            )}
        </Item>
    ));

    return (
        <Wrapper active={active}>
            <BackgroundDim data-testid="dropdown-dim" onClick={dimHandler} />
            {active && (
                <Items aria-label={name}>
                    {items}
                    {createHandler && (
                        <Item>
                            <button type="button" aria-label="addCategory" onClick={createHandler}>
                                추가하기
                            </button>
                        </Item>
                    )}
                </Items>
            )}
        </Wrapper>
    );
};

export default Dropdown;
