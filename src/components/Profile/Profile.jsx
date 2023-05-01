
import PropTypes from 'prop-types';
import styles from 'components/Profile/Profile.module.css'


const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) =>  {

    return (<div className={styles.profile}>
  <div className={styles.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={styles.avatar}
      />
      <p className="name">{username}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>
  
    <ul className={styles.stats}>
      <li>
        <span className="label">Followers</span>
        <span className="quantity"> {followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity"> {views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity"> {likes}</span>
      </li>
    </ul>
  </div>) 
}

Profile.propTypes ={
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,

}

export default Profile;