import styles from './modal.module.scss'

interface IItem{
  name: string;
  desc: string[];
  equip: string;
  exists: boolean;
  img: string;
}

interface IProps{
  onclick: (e: any) => void;
  item: IItem;
}

const Modal = (props:IProps) => {
  if(props.item){
    return (
      <div className={`${styles.model_container} modal_open`} onClick={props.onclick}>
        <div className={styles.model_block}>
          <div className={styles.model_content}>
            <h2 className={styles.model_title}>{props.item.name}</h2>
          </div>
        </div>
      </div>
    );
  }
  };

export default Modal