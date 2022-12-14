import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import React from 'react'
const RemoteShareMovie = dynamic(
  () => import("remote_share_movie/shareMovie"),
  { ssr: false }
)

const ShareMovie: NextPage = () => {
  return (
    <>
      <Head>
        <title>Share Movie - NextJS Container Micro Frontend</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RemoteShareMovie />
    </>
  )
}

export default ShareMovie
