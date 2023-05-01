

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from "./TransactionHistory/TransactionHistory"

import data from 'components/data.json'
import user from 'components/user.json'
import friends from 'components/friends.json'
import transactions from "components/transactions.json";


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
       // display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
<Statistics title='Upload stats' stats ={data}/>
<FriendList friends={friends} />
<TransactionHistory items={transactions} />
    </div>
  );
};
