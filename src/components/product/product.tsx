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
    <div className={`${styles.product_card} ${props.exists ? '' : styles.hidden} modal_open`} onClick={(e) => props.more_onclick(e, props)}>
      {props.exists ? null : (
        <div className={styles.comming}>в разработке...</div>
      )}
      <h2>{props.name}</h2>
      {/* <button className={`${styles.modal_btn} modal_open`}>Подробнее</button>s */}
    </div>
  );
};

export default Product;
