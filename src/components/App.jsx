import Profile from './Profile/Profile';
import user from '../data/user';

import Statistics from './Statistics/Statistics';
import data from '../data/data';

import FriendList from './FriendList/FriendList';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions';


export const App = () => {
  return (
    <div>
      <Profile 
      avatar={user.avatar} 
      username={user.username} 
      tag={user.tag} 
      location={user.location} 
      stats={user.stats}
      />

      <Statistics
      stats={data}
      />

      <FriendList />

      <TransactionHistory items={transactions} />
    </div>
  );
};

