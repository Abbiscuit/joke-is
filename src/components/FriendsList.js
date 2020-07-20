import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FriendsList = () => {
  return (
    <Container>
      <Title>友達リスト</Title>
      <List>
        <ListItem>
          <LinkText to="/">田中長次郎</LinkText>
        </ListItem>
        <ListItem>
          <LinkText to="/">田中長次郎</LinkText>
        </ListItem>
        <ListItem>
          <LinkText to="/">田中長次郎</LinkText>
        </ListItem>
        <ListItem>
          <LinkText to="/">田中長次郎</LinkText>
        </ListItem>
        <ListItem>
          <LinkText to="/">田中長次郎</LinkText>
        </ListItem>
      </List>
    </Container>
  );
};

export default FriendsList;

const Container = styled.div`
  padding: 32px 16px;
`;

const Title = styled.h3`
  font-size: 24px;
  line-height: 1;
  color: #fafafa;
  margin-bottom: 16px;
`;

const List = styled.ul``;

const ListItem = styled.li`
  margin-bottom: 16px;
  color: #fafafa;
  font-size: 16px;
  line-height: 1.5;
`;

const LinkText = styled(Link)`
  color: #fafafa;
`;
