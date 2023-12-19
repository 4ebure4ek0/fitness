import React from "react";
import styles from "./banner.module.scss";

const Banner: React.FC = () => {
  return (
    <>
      <div className={styles.bg}>
        {/* <img src="img/IMG_4065.jpg" alt="bg" className={styles.bg_img}/> */}
      </div>
      <section className={styles.container}>
        <div className={styles.title}>
          <h1>
            фитнес - школа <br />
            тренера и нутрициолога <br />
            Анны Шмуневcкой
          </h1>
          <div className={styles.title_desc}>
            <p>Вход в личный кабинет</p>
            <svg
              width="18"
              height="auto"
              viewBox="0 0 32 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.4918 3.51548C31.5782 2.69156 30.9802 1.95367 30.1563 1.86736L16.7298 0.460785C15.9058 0.374471 15.168 0.972417 15.0816 1.79634C14.9953 2.62025 15.5933 3.35814 16.4172 3.44446L28.3519 4.69474L27.1016 16.6294C27.0153 17.4533 27.6132 18.1912 28.4371 18.2776C29.2611 18.3639 29.999 17.7659 30.0853 16.942L31.4918 3.51548ZM1.94438 28.0247L30.9444 4.52459L29.0556 2.19379L0.0556233 25.6939L1.94438 28.0247Z"
                fill="#F5F5F5"
              />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
