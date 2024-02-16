import Products from 'components/productsLk/productsLk'
import styles from './lkPage.module.scss'

const Lk = () => {
    return(
    <div className={`${styles.container} container`}>
        <div className={styles.header}>
            <img className={styles.avatar} src='/img/1080х1350-5.png'/>
            <h2 className={styles.greeting}>Добрый день, <span className={styles.user}>User</span>!</h2>
            <span className={styles.subscription}>Подписка: 3 мес</span>
        </div>
        <div className={styles.lessons_container}>
            <div className={`${styles.lessons_block} border_container`}>
                <h2 className={`${styles.lessons_title} title_over`}>Доступные курсы</h2>
                <Products />
            </div>
        </div>
    </div>
    )
}

export default Lk