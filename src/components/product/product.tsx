import styles from "./product.module.scss";

interface IProps {
  name: string;
  desc: string[];
  equip: string;
  exists: boolean;
  img: string;
  more_onclick: (e: any, item: undefined | any) => void;
}

const Product = (props: IProps) => {
  return (
    <div className={`${styles.product_card} ${props.exists ? '' : styles.hidden}`}>
      {props.exists ? null : (
        <div className={styles.comming}>в разработке...</div>
      )}
      <h2>{props.name}</h2>
      <button onClick={(e) => props.more_onclick(e, props)} className="modal_open">Подробнее</button>
    </div>
  );
};

export default Product;
