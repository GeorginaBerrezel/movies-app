import styles from "./movieCard.module.css";

export default function movieCard({ movie }) {
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    // const movieDetailsUrl = `https://www.themoviedb.org/movie/${movie.id}`;

  return (
    <li className={styles.card} style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className={styles.overlay}>
            <img src={movie.image} alt={movie.title} className={styles.image} />
            <div className={styles.header}>
            </div>
            <div className={styles.body}>
            <h3>{movie.title}</h3>
            <h3>{movie.release_date}</h3>
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
