import Product from "components/product/product";
import styles from "./products.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
// import { IconContext } from "react-icons";
// import { BsStars } from "react-icons/bs";

const products = [
  {
    name: "Часовой ручной массаж лица",
    desc: ["Массаж поможет избавиться от мышечных спазмов, разгладит морщины и убирет отечность. "],
    equip: "Дополнительное оборудование для практики не требуется",
    exists: true,
    img: 'img/IMG_3979.jpg'
  },
  {
    name: "МФР все тело",
    desc: ["Занятие нацелено на снятие спазмов и избавление от болей во всем тебе."],
    equip: "Дополнительное оборудование: МФР ролл, теннисный мяч",
    exists: false,
    img: 'img/IMG_3979.jpg'
  },
  {
    name: "Курс МФР мяч",
    desc: ["Расслабление всего тела, снятие спазмов", "Миофасциальный релиз - это техника самомассажа, направленная на расслабление фасций и мышц. Передовой метод расслабления, снятия спазмов и снижения отёчности."],
    equip: "Дополнительное оборудование:  теннисный мяч",
    exists: false,
    img: 'img/IMG_3979.jpg'
  },
  {
    name: "Курс МФР ролл",
    desc: ["Миофасциальный релиз - это техника самомассажа, направленная на расслабление фасций и мышц. Передовой метод расслабления, снятия спазмов и снижения отёчности."],
    equip: "Дополнительное оборудование:  МФР ролл",
    exists: false,
    img: 'img/IMG_3979.jpg'
  },
  {
    name: "МФР часовой урок",
    desc: ["Практика нацелена на проработку спазмов во всем теле. После занятия ты получишь легкость, уменьшатся мышечные боли."],
    equip: "",
    exists: false,
    img: 'img/IMG_3979.jpg'
  },
  {
    name: "Расслабление + мобильность",
    desc: [""],
    equip: "",
    exists: false,
    img: 'img/IMG_3979.jpg'
  },
  {
    name: "Здоровая спина",
    desc: [""],
    equip: "",
    exists: false,
    img: 'img/IMG_3979.jpg'
  },
  {
    name: "Индивидуальное ведение (тренировки и/или питание)",
    desc: [""],
    equip: "",
    exists: false,
    img: 'img/IMG_3979.jpg'
  },
];

const Products = () => {
  return (
    <section className={styles.container}>
      <h2 className='section_title'>Курсы</h2>
      <Swiper slidesPerView={1.2} spaceBetween={50}>
        {products.map((product, n) => (<SwiperSlide key={n}><Product exists={product.exists} equip={product.equip} name={product.name} desc={product.desc} img={product.img}/></SwiperSlide>))}
      </Swiper>
      {/* <p className={styles.description}>
        <IconContext.Provider value={{ size: "3em", color: "#f5f5f5"}}>
            <BsStars />
        </IconContext.Provider>
        Короткие и эффективные тренировки для занятых людей. Заниматься можно в любое время и в любом месте, потребуется минимум оборудования
      </p> */}
    </section>
  );
}

export default Products;
