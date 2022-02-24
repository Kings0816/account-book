import React, { useState } from 'react';

import { useResizeHeight } from '../../hooks/useResizeHeight';
import { useColor, useSumbit } from './hooks';
import { CATEGORY_COLORS } from '../../utils/constant/category-color';
import refreshImg from '../../../public/assets/refresh-button.svg';
import {
    Wrapper,
    CostType,
    TypeButton,
    Element,
    Input,
    SelectBox,
    SelectColor,
    ColorInput,
    ButtonContainer,
    DecisionButton,
} from './style';

const CategoryForm = ({ active, category, onCreate, onCancle }) => {
    const [sign, setSign] = useState(category ? category.sign : '+');
    const { resizeHeight } = useResizeHeight();
    const { currentColor, changeColor } = useColor();
    const { handleUpdateSubmit } = useSumbit(onCreate);

    return (
        <Wrapper
            aria-label="categoryCreate"
            active={active}
            onSubmit={(e) => handleUpdateSubmit(sign, e)}
            heightOnKeyboard={resizeHeight === window.innerHeight ? null : resizeHeight}
        >
            <CostType>
                <TypeButton
                    type="button"
                    aria-label="income"
                    active={sign === '+'}
                    onClick={() => setSign('+')}
                >
                    수입
                </TypeButton>
                <TypeButton
                    type="button"
                    aria-label="expenditure"
                    active={sign === '-'}
                    onClick={() => setSign('-')}
                >
                    지출
                </TypeButton>
            </CostType>
            <Element>
                <label htmlFor="name">카테고리명</label>
                <Input type="text" id="name" placeholder="입력하세요." autoComplete="off" />
            </Element>
            <Element>
                <label htmlFor="color">색상</label>
                <SelectBox>
                    <SelectColor
                        type="button"
                        aria-label="refresh"
                        color={CATEGORY_COLORS[currentColor]}
                        onClick={changeColor}
                    >
                        <img src={refreshImg} alt="새로운 색상" />
                    </SelectColor>
                    <ColorInput
                        type="text"
                        id="color"
                        value={CATEGORY_COLORS[currentColor]}
                        readOnly
                    />
                </SelectBox>
            </Element>
            <ButtonContainer>
                <DecisionButton type="button" action="delete" onClick={onCancle}>
                    취소
                </DecisionButton>
                <DecisionButton type="submit" action="create">
                    추가
                </DecisionButton>
            </ButtonContainer>
        </Wrapper>
    );
};

export default CategoryForm;
