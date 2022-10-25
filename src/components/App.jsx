import {Profile, Statistics, FriendList, TransactionHistory} from 'components'
import {user, stats, friends, transactions} from '../data/data'

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
      title={"Upload Stats"}
      stats={stats}
      />

      <FriendList items={friends}/>

      <TransactionHistory items={transactions} />
    </div>
  );
};

