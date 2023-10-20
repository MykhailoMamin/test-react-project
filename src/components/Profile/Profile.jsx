import css from './Profile.module.css';

export default function Profile({ user }) {
  return (
    <>
      {user.map(({ username, tag, location, avatar, stats }) => (
        <div className={css.profilCard}>
          <div class="description">
            <img src={avatar} alt="User avatar" className={css.avatar} />
            <p className={css.userName}>{username}</p>
            <p className={css.userTag}>@{tag}</p>
            <p className={css.userLocation}>{location}</p>
          </div>

          <ul className={css.statusList}>
            <li className={css.statusItem}>
              <span className={css.statusDescription}>Followers</span>
              <span className={css.statusNumber}>{stats.followers}</span>
            </li>
            <li className={css.statusItem}>
              <span className={css.statusDescription}>Views</span>
              <span className={css.statusNumber}>{stats.views}</span>
            </li>
            <li className={css.statusItem}>
              <span className={css.statusDescription}>Likes</span>
              <span className={css.statusNumber}>{stats.likes}</span>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}
