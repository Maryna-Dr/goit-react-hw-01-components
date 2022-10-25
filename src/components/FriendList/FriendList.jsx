import PropTypes from 'prop-types';

import css from './FriendList.module.css'
import FriendListItem from "./FriendListItem";

export default function FriendList({items}) {
  return (
    <ul className={css.list}>
        {items.map(it => (
            <FriendListItem key={it.id} 
            avatar={it.avatar} 
            name={it.name} 
            status={it.isOnline} 
            />
        ))}
    </ul>
  )
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape)
}




