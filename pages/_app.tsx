import type { AppProps } from 'next/app'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
