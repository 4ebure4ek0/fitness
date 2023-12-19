import styles from "./header.module.scss";
import { GoArrowUpRight } from "react-icons/go";

const Header = () => {
    return(
      <div className={styles.menu_container}>
              <header className={styles.menu}>
        <nav className={styles.nav}>
          <span className={styles.item}>курсы</span>
          <span className={styles.item}>о создателе</span>
          <span className={styles.item}>обратная связь</span>
          <span className={styles.item}>
            личный кабинет
            <GoArrowUpRight />
          </span>
        </nav>
      </header>
      </div>
    )
}

export default Header