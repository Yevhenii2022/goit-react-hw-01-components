import PropTypes from 'prop-types';
import {
  ProfileWrapper,
  Description,
  ProfileList,
  ProfileName,
  ProfileText,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileWrapper>
      <Description>
        <img src={avatar} alt="User avatar" width="120" height="120" />
        <ProfileName>{username}</ProfileName>
        <ProfileText>@{tag}</ProfileText>
        <ProfileText>{location}</ProfileText>
      </Description>

      <ProfileList>
        <li>
          <span>Followers </span>
          <Quantity>{stats.followers}</Quantity>
        </li>
        <li>
          <span>Views </span>
          <Quantity>{stats.views}</Quantity>
        </li>
        <li>
          <span>Likes </span>
          <Quantity>{stats.likes}</Quantity>
        </li>
      </ProfileList>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
