import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next App 2</title>
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js again!!!</a>
        </h1>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Vercel
        </a>
      </footer>
    </div>
  );
}
