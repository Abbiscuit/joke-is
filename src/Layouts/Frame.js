import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

const Frame = ({ children, title }) => {
  return (
    <div>
      <Header title={title} />
      <Container>{children}</Container>
    </div>
  );
};

export default Frame;

const Container = styled.div`
  padding: 20px 24px;
`;
