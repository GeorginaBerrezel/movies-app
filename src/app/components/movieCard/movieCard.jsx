import styles from "./movieCard.module.css";

export default function movieCard({ movie }) {
  return (
    <li className={styles.card} style={{ backgroundImage: `url(${movie.image})` }}>
        <div className={styles.overlay}>
            <img src={movie.image} alt={movie.title} className={styles.image} />
            <div className={styles.header}>
            </div>
            <div className={styles.body}>
            <h3>{movie.title}</h3>
            <p>Durée : {movie.duration}</p>
            <div className={styles.extraInfo}>
                <p>Type : {movie.type}</p>
                <p>Note : {movie.rate}/5</p>
            </div>
            </div>
        </div>
    </li>
  )
}
