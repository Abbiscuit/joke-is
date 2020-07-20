import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <React.Fragment>
      <Link to="/profile">
        <CardContainer>
          <AvatarSection>
            <Avatar
              src="https://images.unsplash.com/photo-1542105907-bbbb542a5f79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </AvatarSection>
          <ProfileSection>
            <Name>佐藤ジョージ</Name>
            <ListTitle>お気に入りリスト</ListTitle>
            <List>
              <ListItem>デザインの書①</ListItem>
              <ListItem>物語〜外伝２〜</ListItem>
              <ListItem>サンタの落としもの</ListItem>
            </List>
          </ProfileSection>
        </CardContainer>
      </Link>
    </React.Fragment>
  );
};

export default Card;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: #fff;
  padding: 16px;
  border-radius: 10px;
  margin-bottom: 16px;
`;

const AvatarSection = styled.div`
  margin-right: 16px;
`;

const ProfileSection = styled.div`
  padding: 16px 0;
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50px;
`;

const Name = styled.h2`
  font-size: 24px;
  line-height: 1;
  font-weight: bold;
  color: #212121;
  margin-bottom: 32px;
`;

const ListTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  line-height: 1;
  color: #212121;
  margin-bottom: 16px;
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
