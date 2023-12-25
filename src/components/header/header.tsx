import styles from "./header.module.scss";
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineSportsMartialArts } from "react-icons/md";
import { MdOutlinePerson3 } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { IconContext } from "react-icons";

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
        <nav className={styles.nav_mob}>
          <span className={styles.item}>
            <IconContext.Provider value={{ size: "2em" }}>
              <MdOutlineSportsMartialArts />
            </IconContext.Provider>
          </span>
          <span className={styles.item}>
            <IconContext.Provider value={{ size: "2em" }}>
              <MdOutlinePerson3 />
            </IconContext.Provider>
          </span>
          <span className={styles.item}>
            <IconContext.Provider value={{ size: "2em" }}>
              <FaRegMessage />
            </IconContext.Provider>
          </span>
          <span className={styles.item}>
            <IconContext.Provider value={{ size: "2em" }}>
              <GoArrowUpRight />
            </IconContext.Provider>
          </span>
        </nav>
      </header>
      </div>
    )
}

export default Header