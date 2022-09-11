import React, { useState } from 'react'
import Link from 'next/link'
import { BrowserView, MobileView } from 'react-device-detect'
import styles from './Header.module.scss'

const Header: React.FC = () => {
  const [isShowMobileMenu, setShowMobileMenu] = useState(false)
  const toggleMenuMobile = () => {
    setShowMobileMenu(!isShowMobileMenu)
  }
  const renderBrowserView = (
    <div className={styles.navigation}>
      <Link href='/'>Video List</Link>
      <Link href='/share-movie'>Share video</Link>
    </div>
  )
  const renderMobileView = (
    <div className={styles.navigationMobile}>
      <label className={styles.menuMobileContainer} onClick={toggleMenuMobile}>
        <div className={styles.menuMobileButton + (isShowMobileMenu ? " open" : "")} />
      </label>
      {isShowMobileMenu && <div className={styles.menuMobile}>
        <Link href='/share-movie'>Share a movie</Link>
      </div>}
    </div>
  )
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" >
          <h1>Funny Videos</h1>
        </Link>
      </div>
      <BrowserView>{renderBrowserView}</BrowserView>
      <MobileView>{renderMobileView}</MobileView>
    </header>
  )
}

export default Header