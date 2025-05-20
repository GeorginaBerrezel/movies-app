import styles from "./movieCard.module.css";

export default function MovieCard({ movie }) {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const backdropUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;

  return (
    <li className={styles.cardWrapper}>
      <div className={styles.card} style={{ backgroundImage: `url(${posterUrl})` }}>
        <div className={styles.overlay}>
          <img src={backdropUrl} alt={`${movie.title} backdrop`} className={styles.image} />

          <div className={styles.header}>
            <h3>{movie.title}</h3>
          </div>

          <div className={styles.body}>
            <p>Date de sortie : {movie.release_date}</p>
            <p>Langue : {movie.original_language.toUpperCase()}</p>
            <p className={styles.overview}>{movie.overview}</p>
            <div className={styles.extraInfo}>
              <p>Popularité : {Math.round(movie.popularity)}</p>
              <p>Votes : {movie.vote_average} ({movie.vote_count} avis)</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
