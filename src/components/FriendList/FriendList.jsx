import FriendListItem from "./FriendListItem";
import friends from '../../data/friends';

export default function FriendList() {
  return (
    <ul className="friend-list">
        {friends.map(it => (
            <FriendListItem key={it.id} 
            avatar={it.avatar} 
            name={it.name} 
            status={it.isOnline} 
            />
        ))}
    </ul>
  )
}
