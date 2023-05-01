//import PropTypes from 'prop-types';


import propTypes from 'prop-types';
import styles from "components/FriendList/FriendList.module.css"
import FriendItem from "components/FriendList/FriendItem"


const FriendList = ({ friends }) => {
  return (
    <ul className={styles.list}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li key={id} className={styles.item}>
            <FriendItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    })
  ),
};

export default FriendList;