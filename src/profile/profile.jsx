import styles from './Profile.module.css';

function Profile({ name, photo, link }) {
  return (
    <aside className={styles.card}>
      {photo ? (
        <img className={styles.photo} src={photo} alt={name} />
      ) : (
        <div className={styles.placeholder}>Фото загружается…</div>
      )}
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.years}>1897 – 1938</p>
      <a className={styles.link} href={link} target="_blank" rel="noreferrer">
        Подробнее
      </a>
    </aside>
  );
}

export { Profile };