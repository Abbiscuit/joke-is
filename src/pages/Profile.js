import React from 'react';
import Frame from '../Layouts/Frame';
import ProfileDetail from '../components/ProfileDetail';
import FriendsList from '../components/FriendsList';

const Profile = ({ title }) => {
  return (
    <Frame title={title}>
      <ProfileDetail />
      <FriendsList />
    </Frame>
  );
};

export default Profile;
