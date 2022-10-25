import PropTypes from 'prop-types';

import css from './FriendList.module.css'

export default function FriendListItem({avatar, name, status}) {
  return (
    <li className={css.item}>
        <span className={`${css.pin} ${css[status]}`}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired
}
