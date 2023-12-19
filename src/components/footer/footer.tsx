import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        Шмуневская Анна Олеговна <br />
        ИНН 773319179591
      </div>
      <nav className={styles.nav}>
        <div className={styles.item}>Политика конфиденциальности</div>
        <div className={styles.item}>Договор оферта</div>
      </nav>
    </footer>
  );
};

export default Footer;
