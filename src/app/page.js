import Image from "next/image";
import styles from "./page.module.css";

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
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
          
        </ol>

        <ol>
  {movies.map((movie, index) => (
    <li key={index}>
      <h3>{movie.title}</h3>
      <p>Durée : {movie.duration}</p>
      <p>Type : {movie.type}</p>
      <p>Note : {movie.rate}/5</p>
      <img src={movie.image} alt={movie.title} width={200} />
    </li>
  ))}
</ol>


        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
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
