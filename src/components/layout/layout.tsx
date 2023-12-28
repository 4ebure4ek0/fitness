import Header from "components/header/header";
import styles from "./layout.module.scss";
import { Outlet } from "react-router";
import { observer } from "mobx-react-lite";
import headerStore from "store/header";
import Footer from "components/footer/footer";

const Layout = observer(() => {
    return (
      <>
        <div className={styles.container}>
          {headerStore.open? <Header /> : null}
          <Outlet />
          <Footer />
        </div>
      </>
    );
  })

export default Layout;
