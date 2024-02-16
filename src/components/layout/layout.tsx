import Header from "components/header/header";
import { Outlet } from "react-router";
import { observer } from "mobx-react-lite";
import headerStore from "store/header";
import Footer from "components/footer/footer";
import { useState } from "react";

const Layout = observer(() => {
  const [scrollTo, setScrollTo] = useState<string>('')
  const handleMenu = (item: string) => {
    setScrollTo(item)
  }
    return (
      <>
        <div className='container'>
          {headerStore.open? <Header handleMenu={handleMenu} /> : null}
          <Outlet context={scrollTo}/>
          <Footer />
        </div>
      </>
    );
  })

export default Layout;
