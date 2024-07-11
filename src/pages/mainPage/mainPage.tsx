import About from "components/about/about";
import Banner from "components/banner/banner"
import Form from "components/form/form";
import Products from "components/products/products";
import { useEffect, useRef} from "react";
import { useInView } from "react-intersection-observer";
import { useOutletContext } from "react-router";
import headerStore from "store/header";
import "swiper/css";

const Main = () => {
  const scrollTo = useOutletContext<string>()
  const products = useRef<null | HTMLDivElement>(null)
  const about = useRef<null | HTMLDivElement>(null)
  const form = useRef<null | HTMLDivElement>(null)

  const menuItems: any = {
    products: products,
    about: about,
    form: form
  }

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    headerStore.changeOpen(inView);
  }, [inView]);

  useEffect(() => {
    if(scrollTo != ''){
      if(menuItems[scrollTo].current)
      menuItems[scrollTo].current.scrollIntoView({ block: "start" })
    }
  }, [scrollTo])

  return (
    <>
      <Banner />
      <div ref={ref}>
        <Products ref={products}/>
        <About ref={about}/>
        <Form ref={form}/>
      </div>
    </>
  );
};

export default Main;
