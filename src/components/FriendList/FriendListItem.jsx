export default function FriendListItem({avatar, name, status}) {
  return (
    <li className="item">
        {status ? (
            <span className="status-true"></span>
        ) : (
            <span className="status-false"></span>
        )}
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </li>
  )
}
