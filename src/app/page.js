import Image from "next/image";
import styles from "./page.module.css";
import MovieCard from "./components/movieCard/movieCard.jsx"; 

const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDNiODJjNDExMmUzYTYxZTRhOTE3YTIzNzhkODk5OSIsIm5iZiI6MTc0NzUwMjA4Ny41MzUsInN1YiI6IjY4MjhjNDA3OWQwNzg5ZGZiMDhiZmVjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wdiwW-5XuRxPF3CM8hfXPYuuaSUCCqGC8hTDKBzWPWU'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));

const movies = [
  {
    duration: '1h34min',
    image: 'https://loremflickr.com/640/480?lock=1234',
    title: 'adfga',
    type: 'horreur',
    rate: 4
  },
    {
    duration: '1h34min',
    image: 'https://loremflickr.com/640/480?lock=1234',
    title: 'adfga',
    type: 'horreur',
    rate: 4
  },
    {
    duration: '1h34min',
    image: 'https://loremflickr.com/640/480?lock=1234',
    title: 'film3',
    type: 'horreur',
    rate: 4
  },
    {
    duration: '1h34min',
    image: 'https://loremflickr.com/640/480?lock=1234',
    title: 'adfga',
    type: 'horreur',
    rate: 4
  },
    {
    duration: '1h34min',
    image: 'https://loremflickr.com/640/480?lock=1234',
    title: 'adfga',
    type: 'horreur',
    rate: 4
  },
    {
    duration: '1h34min',
    image: 'https://loremflickr.com/640/480?lock=1234',
    title: 'adfga',
    type: 'horreur',
    rate: 4
  },
    {
    duration: '1h34min',
    image: 'https://loremflickr.com/640/480?lock=1234',
    title: 'adfga',
    type: 'horreur',
    rate: 4
  },
    {
    duration: '1h34min',
    image: 'https://loremflickr.com/640/480?lock=1234',
    title: 'adfga',
    type: 'horreur',
    rate: 4
  },
    {
    duration: '1h34min',
    image: 'https://loremflickr.com/640/480?lock=1234',
    title: 'adfga',
    type: 'horreur',
    rate: 4
  },
    {
    duration: '1h34min',
    image: 'https://loremflickr.com/640/480?lock=1234',
    title: 'adfga',
    type: 'horreur',
    rate: 4
  },
    {
    duration: '1h34min',
    image: 'https://loremflickr.com/640/480?lock=1234',
    title: 'adfga',
    type: 'horreur',
    rate: 4
  },
    {
    duration: '1h34min',
    image: 'https://loremflickr.com/640/480?lock=1234',
    title: 'adfga',
    type: 'horreur',
    rate: 4
  },
]

// console.log(movies);

export default function Home() {
  return (
  
    <div className={styles.page}>
      <main className={styles.main}>
        <ol className={styles.cardGrid}>
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </ol>

      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
