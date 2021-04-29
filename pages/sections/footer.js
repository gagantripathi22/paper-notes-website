import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Footer.module.css'

export default function Header() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_left_content}>
          <Image
            src="/paper-notes-logo-white.png"
            alt="Picture of the author"
            width={57}
            height={57}
            layout="fixed"
            className={styles.logo}
          />
          <p className={styles.title}>Paper Notes</p>
        </div>
        <div className={styles.footer_right_content}>
          <p className={styles.copyright}>© 2021 Paper Notes</p>
        </div>
      </div>          
    </div>
  )
}
