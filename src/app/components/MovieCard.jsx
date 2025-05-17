import styles from "./Test.module.css";

export default function MovieCard({ movie }) {
  return (
    <li className={styles.card} style={{ backgroundImage: `url(${movie.image})` }}>
        <div className={styles.overlay}>
            <img src={movie.image} alt={movie.title} className={styles.image} />
            <div className={styles.header}>
                {/* <h3>{movie.title}</h3> */}
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
