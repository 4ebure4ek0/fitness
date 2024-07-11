// import { useParams } from "react-router"
import styles from './coursePage.module.scss'

const Course = () => {
    // let { id } = useParams()
    let product = {
        id: 8,
        name: "Индивидуальное ведение (тренировки и/или питание)",
        desc: ["test", "lorem ipsum"],
        equip: "не требуется",
        exists: false,
        img: 'img/IMG_3979.jpg'
    }
    return (
        <div className={`${styles.container} container`}>
            <div className={styles.course}>
                <div className={`${styles.course_block} border_container`}>
                    <h2 className={`${styles.title} title_over`}>{product.name}</h2>
                    <div className={styles.description}>
                        {product.desc.map((p, n) => <p key={n}>{p}</p>)}
                    </div>
                    <div className={styles.equip}>
                        <h3 className={styles.equip_title}>Оборудование: </h3>
                        <span className={styles.equip_for_course}>{product.equip}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course