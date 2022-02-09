import React from 'react';
import { nanoid } from 'nanoid';

import deleteImg from '../../../public/assets/delete-button.svg';
import { Wrapper, Item } from './style';

const Dropdown = ({ name, data, active, changeHandler, deleteHandler, createHandler }) => {
    const items = data.map((_data) => (
        <Item key={nanoid()} onClick={changeHandler}>
            <span>{_data.name}</span>
            {deleteHandler && (
                <img src={deleteImg} onClick={(e) => deleteHandler(_data.id, e)} alt="delete" />
            )}
        </Item>
    ));

    return (
        <Wrapper active={active} aria-label={name}>
            {items}
            {createHandler && (
                <Item>
                    <button type="button" aria-label="addCategory" onClick={createHandler}>
                        추가하기
                    </button>
                </Item>
            )}
        </Wrapper>
    );
};

export default Dropdown;
