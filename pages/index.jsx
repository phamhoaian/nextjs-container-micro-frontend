// import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const RemoteMovieList = dynamic(
  () => import('movies/movieList'),
  { ssr: false }
)

const Home = () => {
  return (
    <>
      <Head>
        <title>Home - NextJS Container Micro Frontend</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RemoteMovieList />
    </>
  )
}

export default Home
