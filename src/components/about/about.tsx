import React from 'react'
import styles from './about.module.scss'

const About = React.forwardRef<HTMLDivElement>((props, ref) => {
    return(
        <section className={styles.container} ref={ref}>
            <div className={styles.about}>
                <h2 className={`${styles.title} section_title`}>О создателе</h2>
                <p className={styles.description}>
                    Меня зовут <span className={styles.name}>Анна</span>.<br />
                    Я дипломированный тренер и нутрициолог, автор телеграм каналов <a className={styles.link}>С прямой спиной</a> и <a className={styles.link}>С пустой тарелкой</a>. Я променяла офисную жизнь инженера на тренерство. 
                </p>
                <div className={styles.photo}>
                    <img src="img/photo_2023-10-25_15-58-36.jpg" alt="Создатель онлайн-школы - Анна Шмуневская" className={styles.photo_img}/>
                </div>
            </div>
            <div className={styles.slogan}>
                <div className={styles.slogan_border}>
                    <span className={`${styles.slogan_highlight} ${styles.slogan_title}`}>Фитнес</span>
                    <p className={styles.description}>это <span className={styles.slogan_highlight}>не каторга</span> ради снижения веса</p>
                </div>
            </div>
            <div className={styles.about}>
                <div className={styles.photo}>
                    <img src="img/IMG_4075.jpg" alt="Создатель онлайн-школы - Анна Шмуневская" className={styles.photo_img}/>
                </div>
                <p className={styles.description}>
                    Эволюция не думала, что мы будем сидеть по 8-10 часов. Телу нужно движение. <br />От регулярных занятий уходят боли в теле, пропадает хруст, улучшается настроение и повышается общая работоспособность.
                </p>
            </div>
        </section>
    )
})

export default About