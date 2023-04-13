import Link from "next/link";
// import Slider from "react-slick";
// import { sliderData } from "./SliderData";
import client1 from "../../../assets/images/client/1.png";
import client2 from "../../../assets/images/client/2.png";
import client5 from "../../../assets/images/client/5.png";
import client3 from "../../../assets/images/client/3.png";
import client4 from "../../../assets/images/client/4.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
const BannerSlider = ({ children }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      // spaceBetween={30}
      slidesPerView={1}
      // navigation
      // pagination={{ clickable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div class="testimonial-item">
          <p class="testimonial__desc color-white">
            If you’re looking for a rewarding career and the chance to make an
            impact, you’ve come to the right place. We will transform your
            business through our techniques!
          </p>

          <div className="slider-img-text">
            <div class="testimonial__meta">
              <h4 class="testimonial__meta-title">Ahmed Abdallah</h4>
              <p class="testimonial__meta-desc">Digital Media Manager</p>
            </div>
            <div
              className="userPhoto"
              style={{
                marginTop: "50px",
              }}
            >
              <Image width={50} height={50} src={client1} alt="client" />
              <Image width={50} height={50} src={client2} alt="client" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="testimonial-item">
          <p class="testimonial__desc color-white">
            If you’re looking for a rewarding career and the chance to make an
            impact, you’ve come to the right place. We will transform your
            business through our techniques!{" "}
          </p>
          <div className="slider-img-text">
            <div class="testimonial__meta">
              <h4 class="testimonial__meta-title">John Peter</h4>
              <p class="testimonial__meta-desc">7oroof Inc</p>
            </div>
            <div
              className="userPhoto"
              style={{
                marginTop: "50px",
              }}
            >
              <Image
                width={50}
                height={50}
                src={client2}
                alt="client"
                style={{ marginRight: "10px" }}
              />
              <Image width={50} height={50} src={client3} alt="client" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="testimonial-item">
          <p class="testimonial__desc color-white">
            If you’re looking for a rewarding career and the chance to make an
            impact, you’ve come to the right place. We will transform your
            business through our techniques!
          </p>
          <div
            style={{
              position: "relative",
            }}
          >
            <div class="testimonial__meta">
              <h4 class="testimonial__meta-title">Ayman</h4>
              <p class="testimonial__meta-desc">7oroof Inc</p>
            </div>
            <div
              className="userPhoto"
              style={{
                marginTop: "50px",
              }}
            >
              <Image
                width={50}
                height={50}
                src={client3}
                alt="client"
                style={{ marginRight: "10px" }}
              />
              <Image width={50} height={50} src={client4} alt="client" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="testimonial-item">
          <p class="testimonial__desc color-white">
            {" "}
            If you’re looking for a rewarding career and the chance to make an
            impact, you’ve come to the right place. We will transform your
            business through our techniques!{" "}
          </p>
          <div className="slider-img-text">
            <div class="testimonial__meta">
              <h4 class="testimonial__meta-title">John Peter</h4>
              <p class="testimonial__meta-desc">7oroof Inc</p>
            </div>
            <div
              className="userPhoto"
              style={{
                marginTop: "50px",
              }}
            >
              <Image
                width={50}
                height={50}
                src={client4}
                alt="client"
                style={{ marginRight: "10px" }}
              />
              <Image width={50} height={50} src={client5} alt="client" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="testimonial-item">
          <p class="testimonial__desc color-white">
            My project was a simple & small task, but the persistence and
            determination turned it into an awesome and great project which make
            me happy .
          </p>
          <div className="slider-img-text">
            <div class="testimonial__meta">
              <h4 class="testimonial__meta-title">John Peter</h4>
              <p class="testimonial__meta-desc">7oroof Inc</p>
            </div>
            <div
              className="userPhoto"
              style={{
                marginTop: "50px",
              }}
            >
              <Image
                width={50}
                height={50}
                src={client5}
                alt="client"
                style={{ marginRight: "10px" }}
              />
              <Image width={50} height={50} src={client1} alt="client" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      {/* {children} */}
    </Swiper>

    // </div>
  );
};

export default BannerSlider;
