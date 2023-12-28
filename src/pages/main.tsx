import About from "components/about/about";
import Banner from "components/banner/banner"
import Form from "components/form/form";
import Products from "components/products/products";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import headerStore from "store/header";
import "swiper/css";

const Main = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    headerStore.changeOpen(inView);
  }, [inView]);

  return (
    <>
      <Banner />
      <div ref={ref}>
        <Products />
        <About />
        <Form />
      </div>
    </>
  );
};

export default Main;
