import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Features.module.css'

export default function Features() {
  return (
    <div className={styles.features}>
      <div className={styles.container}>
        <div className={styles.features_grid}>
          <div className={styles.grid_item}>
            <div className={styles.grid_icon_area + ' ' + styles.color1}>
              <Image
                src="/lines.png"
                alt="Picture of the author"
                width={35}
                height={35}
                layout="fixed"
                className={styles.logo}
              />
            </div>
            <div className={styles.item_text_area}>
              <p className={styles.item_title}>Quick and easy</p>
              <p className={styles.item_desc}>Simple user interface helps you to create notes easily</p>
            </div>
          </div>
          <div className={styles.grid_item}>
            <div className={styles.grid_icon_area + ' ' + styles.color2}>
              <Image
                src="/dark-mode.png"
                alt="Picture of the author"
                width={38}
                height={38}
                layout="fixed"
                className={styles.logo}
              />
            </div>
            <div className={styles.item_text_area}>
              <p className={styles.item_title}>Dark mode</p>
              <p className={styles.item_desc}>Simple user interface helps you to create notes easily</p>
            </div>
          </div>
          <div className={styles.grid_item}>
            <div className={styles.grid_icon_area + ' ' + styles.color3}>
              <Image
                src="/search.png"
                alt="Picture of the author"
                width={35}
                height={35}
                layout="fixed"
                className={styles.logo}
              />
            </div>
            <div className={styles.item_text_area}>
              <p className={styles.item_title}>Search with ease</p>
              <p className={styles.item_desc}>Simple user interface helps you to create notes easily</p>
            </div>
          </div>
          <div className={styles.grid_item}>
            <div className={styles.grid_icon_area + ' ' + styles.color4}>
              <Image
                src="/sync.png"
                alt="Picture of the author"
                width={35}
                height={35}
                layout="fixed"
                className={styles.logo}
              />
            </div>
            <div className={styles.item_text_area}>
              <p className={styles.item_title}>Sync notes</p>
              <p className={styles.item_desc}>Simple user interface helps you to create notes easily</p>
            </div>
          </div>
        </div>
      </div>          
    </div>
  )
}
