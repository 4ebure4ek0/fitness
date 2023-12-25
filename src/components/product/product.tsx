import styles from "./product.module.scss";

interface IProps {
  name: string;
  desc: string[];
  equip: string;
  exists: boolean;
  img: string;
}

const Product = (props: IProps) => {
  return (
      <div className={`${styles.product_card} ${props.exists ? null : styles.hidden}`}>
        {props.exists ? null : (
          <div className={styles.comming}>в разработке...</div>
        )}
        <h2>{props.name}</h2>
      </div>
  );
};

export default Product;
