import React from 'react';
import PropTypes from 'prop-types';

import { useShapedDate } from './hooks';
import previous from '../../../public/assets/previous-button.svg';
import next from '../../../public/assets/next-button.svg';
import { Wrapper, Title, DateBox, ArrowButton, Date, PageBox, PageTarget } from './style';

const Header = ({ current }) => {
    const [shapedDate, changeDate] = useShapedDate();

    return (
        <Wrapper>
            <Title>JH Account Book</Title>
            <DateBox>
                <ArrowButton aria-label="prev-month" onClick={() => changeDate('-')}>
                    <img src={previous} />
                </ArrowButton>
                <Date data-testid="date">{shapedDate}</Date>
                <ArrowButton aria-label="next-month" onClick={() => changeDate('+')}>
                    <img src={next} />
                </ArrowButton>
            </DateBox>
            <PageBox>
                <PageTarget to="/" selected={current === 'main'}>
                    내역
                </PageTarget>
                <PageTarget to="/calendar" selected={current === 'calendar'}>
                    달력
                </PageTarget>
                <PageTarget to="/statistics" selected={current === 'statistics'}>
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
