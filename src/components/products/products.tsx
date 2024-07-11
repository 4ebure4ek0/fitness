import Product from "components/product/product";
import styles from "./products.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import Modal from "components/modal/modal";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface IProduct {
  name: string;
  desc: string[];
  equip: string;
  exists: boolean;
  img: string;
}

const Products = React.forwardRef<HTMLDivElement>((props, ref) => {
  const [openModal, setOpenModal] = useState(false)
  const [itemModal, setItemModal] = useState({})
  const [products, setProducts] = useState<Array<IProduct>>([])

  useEffect(() => {
    let url = 'http://localhost:3010/api/courses'
    axios.get(url)
      .then((res) => {
        let courses = res.data.courses
        let coursesArr: Array<IProduct> = [];
        Object.keys(courses).forEach((course)=>{
          coursesArr.push(courses[course])
        });
        setProducts(courses)
      })
  }, [])

  const toggleModal = (e: any, item: undefined | string = undefined) => {
    if (e.target.classList.contains('modal_open')) {
      setOpenModal(!openModal)
    }
    if (!!item) {
      setItemModal(item)
    }
  }

  return (
    <section className={styles.container} ref={ref}>
      <h2 className='section_title'>Курсы</h2>
      <Swiper slidesPerView={'auto'} spaceBetween={30} className={styles.slider}>
        {products.map((product, n) => (<SwiperSlide className={styles.slider_slide} key={n}><Product exists={product.exists} equip={product.equip} name={product.name} desc={product.desc} img={product.img} more_onclick={toggleModal} /></SwiperSlide>))}
      </Swiper>
      {openModal ? <Modal onclick={toggleModal} item={itemModal} /> : null}
    </section>
  );
})

export default Products;
