import propTypes from 'prop-types';
import styles from 'components/FriendList/FriendList.module.css';

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <>
      {isOnline ? (
        <span className={`${styles.status} ${styles.status_onLine}`}></span>
      ) : (
        <span className={styles.status}></span>
      )}
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string,
  isOnLine: propTypes.bool,
};

export default FriendListItem;
