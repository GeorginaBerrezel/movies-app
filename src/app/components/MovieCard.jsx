import styles from "./Test.module.css";

export default function MovieCard({ movie }) {
  return (
    <li className={styles.card}>
        <div className={styles.header}>
            <h3>{movie.title}</h3>
        </div>
        <div className={styles.body}>
            <img src={movie.image} alt={movie.title} />
            <p>Durée : {movie.duration}</p>
            <div className={styles.extraInfo}>
            <p>Type : {movie.type}</p>
            <p>Note : {movie.rate}/5</p>
            </div>
        </div>
    </li>
  )
}
