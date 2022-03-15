import PropTypes from 'prop-types';
import defaultPhoto from './defaultPhoto.png'
import css from './socialProfile.module.css';

export default function Profile ({
    userame = "User Name",
    tag,
    location,
    avatar = defaultPhoto,
    stats: { followers, views, likes }
}) {
    return (
        <div>
          <img src={avatar} alt="defaultPhono" />
          <h2>{userame}</h2>
          <p>@{tag}</p>
          <p>{location}</p>
          <div>
            <div>
              <p>Followers</p>
              <p>{followers}</p>
            </div>
            <div>
              <p>Views</p>
              <p>{views}</p>
            </div>
            <div>
              <p>Likes</p>
              <p>{likes}</p>
            </div>
          </div>
        </div>
    )
}

Profile.proptype = {
  userame: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
