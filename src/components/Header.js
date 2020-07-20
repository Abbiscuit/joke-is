import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = ({ title }) => {
  return (
    <AppBar>
      <Title to="/">{title ? title : '我、すいとーよ'}</Title>
    </AppBar>
  );
};

export default Header;

const AppBar = styled.header`
  background-color: #000;
  height: 80px;
  display: flex;
  align-items: center;
`;

const Title = styled(Link)`
  width: 100%;
  font-size: 24px;
  font-weight: normal;
  line-height: 1;
  color: #fff;
  text-align: center;
`;
