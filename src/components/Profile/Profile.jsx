import PropTypes from 'prop-types';
import { ProfileWrapper, Description, ProfileList } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileWrapper>
      <Description>
        <img src={avatar} alt="User avatar" class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </Description>

      <ProfileList>
        <li>
          <span class="label">Followers </span>
          <span class="quantity">{stats.followers}</span>
        </li>
        <li>
          <span class="label">Views </span>
          <span class="quantity">{stats.views}</span>
        </li>
        <li>
          <span class="label">Likes </span>
          <span class="quantity">{stats.likes}</span>
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
