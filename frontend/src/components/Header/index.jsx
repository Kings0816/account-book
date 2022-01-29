import React from 'react';
import { useRecoilState } from 'recoil';
import PropTypes from 'prop-types';

import { shapedDateState } from '../../recoil/date/selector';

import previous from '../../../public/assets/previous-button.svg';
import next from '../../../public/assets/next-button.svg';

import { Wrapper, Title, DateBox, ArrowButton, Date, PageBox, PageTarget } from './style';

const Header = ({ current }) => {
    const [shapedDate, setShapedDate] = useRecoilState(shapedDateState);

    const changeDate = (sign) => {
        const [NEXT, PREV] = [1, -1];
        const value = sign === '+' ? NEXT : PREV;
        setShapedDate(value);
    };

    return (
        <Wrapper>
            <Title>JH Account Book</Title>
            <DateBox>
                <ArrowButton>
                    <img src={previous} onClick={() => changeDate('-')} />
                </ArrowButton>
                <Date>{shapedDate}</Date>
                <ArrowButton>
                    <img src={next} onClick={() => changeDate('+')} />
                </ArrowButton>
            </DateBox>
            <PageBox>
                <PageTarget to="/" isSelected={current === 'main'}>
                    내역
                </PageTarget>
                <PageTarget to="/calendar" isSelected={current === 'calendar'}>
                    달력
                </PageTarget>
                <PageTarget to="/statistics" isSelected={current === 'statistics'}>
                    통계
                </PageTarget>
            </PageBox>
        </Wrapper>
    );
};

Header.propTypes = {
    current: PropTypes.string.isRequired,
};

export default Header;
