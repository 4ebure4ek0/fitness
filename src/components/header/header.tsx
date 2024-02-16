import styles from "./header.module.scss";
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineSportsMartialArts } from "react-icons/md";
import { MdOutlinePerson3 } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { IconContext } from "react-icons";

interface IProps{
  handleMenu: (item:string) => void
}

const Header = (props:IProps) => {
  const handleMenuItem = (e:React.SyntheticEvent<EventTarget>) => {
    if (!(e.target instanceof HTMLSpanElement)) {
      return;
    }
    if(!!e.target.dataset.name)
      props.handleMenu(e.target.dataset.name)
  }
    return(
      <div className={styles.menu_container}>
              <header className={styles.menu}>
        <nav className={styles.nav}>
          <span className={styles.item} data-name={'products'} onClick={handleMenuItem}>курсы</span>
          <span className={styles.item} data-name={'about'} onClick={handleMenuItem}>о создателе</span>
          <span className={styles.item} data-name={'form'} onClick={handleMenuItem}>обратная связь</span>
          <span className={styles.item}>
            личный кабинет
            <GoArrowUpRight />
          </span>
        </nav>
        <nav className={styles.nav_mob}>
          <span className={styles.item}>
            <IconContext.Provider value={{ size: "1.5em" }}>
              <MdOutlineSportsMartialArts />
            </IconContext.Provider>
          </span>
          <span className={styles.item}>
            <IconContext.Provider value={{ size: "1.5em" }}>
              <MdOutlinePerson3 />
            </IconContext.Provider>
          </span>
          <span className={styles.item}>
            <IconContext.Provider value={{ size: "1.2em" }}>
              <FaRegMessage />
            </IconContext.Provider>
          </span>
          <span className={styles.item}>
            <IconContext.Provider value={{ size: "1.5em" }}>
              <GoArrowUpRight />
            </IconContext.Provider>
          </span>
        </nav>
      </header>
      </div>
    )
}

export default Header