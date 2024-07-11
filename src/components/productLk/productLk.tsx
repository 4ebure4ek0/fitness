import { IconContext } from 'react-icons';
import styles from './productLk.module.scss'
import { FaPlay } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface IProduct {
  name: string;
  desc: string[];
  equip: string;
  exists: boolean;
  img: string;
  id: number;
}

interface IProps {
  product: IProduct
}

const Product = (props: IProps) => {
  const [play, setPlay] = useState<boolean>(false)
  return (
    <div className={styles.product}>
      <Link to={`course/${props.product.id}`} className={styles.link}>
        <div className={styles.circle} onMouseEnter={() => setPlay(!play)} onMouseLeave={() => setPlay(!play)}>
          90%
          {
            play ?
              <div className={styles.circle_play}>
                <IconContext.Provider value={{ size: "50px", color: "#f5f5f5" }}>
                  <FaPlay />
                </IconContext.Provider>
              </div>
              :
              null
          }
        </div>
      </Link>
      <h3 className={styles.title}>{props.product.name}</h3>
    </div>
  )
}

export default Product