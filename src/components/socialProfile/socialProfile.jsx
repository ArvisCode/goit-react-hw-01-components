import PropTypes from 'prop-types';
import defaultPhoto from './defaultPhono.png';
import css from './socialProfile.module.css';

export default function Profile ({
    userame = "User Name",
    tag,
    location,
    avatar = defaultPhoto,
    stats: { followers, views, likes }
}) {
    return (
        <div></div>
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
