import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProfileDetail = () => {
  return (
    <Container>
      <Div>
        <Avatar
          src="https://images.unsplash.com/photo-1542105907-bbbb542a5f79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80"
          alt=""
        />
      </Div>
      <ProfileSection>
        <ProfileContainer>
          <Name>佐藤ジョージ</Name>
          <Button to="/">友達になる</Button>
        </ProfileContainer>
        <InnerContainer>
          <ListTitle>お気に入りリスト　</ListTitle>
          <Date>2020/07/17</Date>
        </InnerContainer>
        <List>
          <ListItem>デザインの書①</ListItem>
          <ListItem>物語〜外伝２〜</ListItem>
          <ListItem>サンタの落としもの</ListItem>
        </List>

        <Button to="/">お気にいり</Button>
      </ProfileSection>
    </Container>
  );
};

export default ProfileDetail;

const Container = styled.div`
  padding: 16px;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 24px;
`;

const Div = styled.div`
  margin-bottom: 16px;
`;

const Avatar = styled.img`
  width: 305px;
  height: 305px;
  border-radius: 100%;
`;

const ProfileSection = styled.div``;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Name = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #212121;
  /* line-height: 1; */
`;

const Button = styled(Link)`
  text-align: center;
  border: 1px solid #ee456e;
  padding: 0 16px;
  line-height: 1;
  width: 136px;
  max-width: 136px;
  height: 24px;
  font-size: 16px;
  color: #ee456e;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const ListTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  color: #212121;
`;

const Date = styled.p`
  font-size: 16px;
  color: #212121;
`;

const List = styled.ul`
  width: 100%;
`;

const ListItem = styled.li`
  font-size: 16px;
  line-height: 1;
  color: #212121;
  margin-bottom: 16px;
`;
