import Product from "components/productLk/productLk";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import styles from './productsLk.module.scss'
import { useEffect, useState } from "react";
import axios from "axios";

interface IProduct {
  id: number
  name: string;
  desc: string[];
  equip: string;
  exists: boolean;
  img: string;
}

const Products = () => {
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

  return (
    <Swiper className={styles.products} slidesPerView={'auto'} spaceBetween={10} grabCursor={true}>
      {products.map((product, n) => (
        <SwiperSlide className={styles.product_slide} key={n}><Product product={product} /></SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Products