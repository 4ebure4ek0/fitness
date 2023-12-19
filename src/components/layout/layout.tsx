import Header from "components/header/header";
import styles from "./layout.module.scss";
import { Outlet } from "react-router";
import { observer } from "mobx-react-lite";
import headerStore from "store/header";

const Layout = observer(() => {
  console.log(headerStore.open)
    return (
      <>
        <div className={styles.container}>
          {headerStore.open? <Header /> : null}
          <Outlet />
        </div>
      </>
    );
  })

export default Layout;
