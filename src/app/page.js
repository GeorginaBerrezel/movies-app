"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import MovieCard from "./components/movieCard/movieCard.jsx";
import FilterUI from "./components/filterUI/FilterUI.jsx";

const url =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDNiODJjNDExMmUzYTYxZTRhOTE3YTIzNzhkODk5OSIsIm5iZiI6MTc0NzUwMjA4Ny41MzUsInN1YiI6IjY4MjhjNDA3OWQwNzg5ZGZiMDhiZmVjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wdiwW-5XuRxPF3CM8hfXPYuuaSUCCqGC8hTDKBzWPWU",
  },
};

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setAllMovies(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur fetch TMDB :", err);
        setLoading(false);
      });
  }, []);

  const handleFilter = ({ note, lang, search, year }) => {
    let filtered = allMovies;

    if (!isNaN(note)) {
      filtered = filtered.filter((movie) => movie.vote_average >= note);
    }

    if (lang) {
      filtered = filtered.filter((movie) => movie.original_language === lang);
    }

    if (search && search.trim() !== "") {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (year) {
      filtered = filtered.filter(
        (movie) => movie.release_date && movie.release_date.startsWith(year)
      );
    }

    setMovies(filtered);
  };

  const resetFilters = () => {
    setMovies(allMovies);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <FilterUI onFilter={handleFilter} onReset={resetFilters} />

        {loading ? (
          <p className={styles.loading}>Chargement des films...</p>
        ) : (
          <>
            <p className={styles.count}>{movies.length} films trouvés</p>
            <ol className={styles.cardGrid}>
              {movies.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
              ))}
            </ol>
          </>
        )}
      </main>

      <footer className={styles.footer}>
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          <Image src="/globe.svg" alt="Globe icon" width={16} height={16} /> Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
