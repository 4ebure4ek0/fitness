import { GoArrowUpRight } from "react-icons/go";
import styles from "./form.module.scss";
import React from "react";

const Form = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section className={styles.form} id="#form" ref={ref}>
      <h2 className={`${styles.title} section_title`}>Обратная связь</h2>
      <div className={styles.form_block}>
        <input type="name" className={styles.input} placeholder="Имя" />
        <input type="tel" className={styles.input} placeholder="Телефон" />
        <input type="email" className={styles.input} placeholder="Почта" />
        <textarea
          className={styles.input}
          placeholder="Комментарий"
        ></textarea>
        <button className={styles.btn}>
          Отправить
          <GoArrowUpRight />
        </button>
      </div>
    </section>
  );
})

export default Form;
