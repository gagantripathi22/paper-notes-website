import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Image
          src="/paper-notes-logo.png"
          alt="Picture of the author"
          width={57}
          height={57}
          layout="fixed"
          className={styles.logo}
        />
        <p className={styles.title}>Paper Notes</p>
      </div>          
    </div>
  )
}
