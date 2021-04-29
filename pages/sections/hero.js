import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroTextArea}>
          <p className={styles.heroTextTitle}>Manage notes<br></br>easily</p>
          <p className={styles.heroTextDesc}>Download Paper Notes to manage<br></br>your notes easily</p>
          <Link href="\">
            <Image
              src="/google-play-badge.png"
              width={149}
              height={47}
              layout="fixed"
              className={styles.googlePlayBadge}
            />
          </Link>
          <p className={styles.heroTextIOS}><b className={styles.iosUserSpace}>IOS user?</b> <i>Join our newsletter to be the first to know when IOS app is released</i></p>
        </div>
        <div className={styles.heroImageArea}>
          <div className={styles.android_phone}>
            <Image
              src="/app-showcase.png"
              alt="Picture of the author"
              width={690}
              height={534}
              layout="fixed"
              className={styles.android}
            /> 
          </div>
        </div>
      </div>          
    </div>
  )
}
