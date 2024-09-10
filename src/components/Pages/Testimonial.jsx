import React from 'react'
import test1 from '../../assets/img/other/testimonial-author1.png'
import test2 from '../../assets/img/other/testimonial-quate.png'
import test3 from '../../assets/img/other/about-thumb4.png'
import thumb from '../../assets/img/other/testimonial-thumb.png'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Pagination } from 'swiper/modules'
export default function Testimonial() {
    return (
        <section className="testimonial__section--two section--padding position-relative">
            <div className="container">
                <div className="testimonial__inner--style2 d-flex align-items-center">
                    {/* Testimonial thumbnail */}
                    <div
                        className="testimonial__thumbnail position-relative aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration={1200}
                        data-aos-delay={100}
                    >
                        <img src={thumb} alt="img" />
                        <span className="testimonial__thumbnail--text">Client Testimonial</span>
                    </div>
                    {/* Testimonial thumbnail .\ */}
                    {/* Testimonial content */}
                    <div
                        className="testimonial__content aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration={1200}
                        data-aos-delay={150}
                    >
                        <div className="testimonial__inner--style2 testimonial__swiper--column1 swiper">
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                modules={[Pagination]}
                                className="swiper-wrapper"
                            >
                                <SwiperSlide className="swiper-slide">
                                    <div className="testimonial__content--items">
                                        <p className="testimonial__content--desc">
                                            This architectural masterpiece boasts spacious open-concept living areas, perfect for both entertaining and everyday living. The gourmet kitchen is a chef's dream, featuring top-of-the-line appliances, custom cabinetry, and a large center island. The adjacent dining area offers a seamless flow, ideal for hosting intimate gatherings or grand celebrations. dolor vel maiores illo, corrupti totam!
                                        </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="testimonial__content--items">
                                        <p className="testimonial__content--desc">
                                            This architectural masterpiece boasts spacious open-concept living areas, perfect for both entertaining and everyday living. The gourmet kitchen is a chef's dream, featuring top-of-the-line appliances, custom cabinetry, and a large center island. The adjacent dining area offers a seamless flow, ideal for hosting intimate gatherings or grand celebrations. dolor vel maiores illo, corrupti totam!
                                        </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="testimonial__content--items">
                                        <p className="testimonial__content--desc">
                                            This architectural masterpiece boasts spacious open-concept living areas, perfect for both entertaining and everyday living. The gourmet kitchen is a chef's dream, featuring top-of-the-line appliances, custom cabinetry, and a large center island. The adjacent dining area offers a seamless flow, ideal for hosting intimate gatherings or grand celebrations. dolor vel maiores illo, corrupti totam!
                                        </p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className="testimonial__footer d-flex align-items-center">
                                <div className="testimonial__author--style">
                                    <h3 className="testimonial__author--title">Mathias Herasen</h3>
                                    <p className="testimonial__author--subtitle">
                                        Founder of <span>GamerPay</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Testimonial content .\ */}
                </div>
            </div>
            <img
                className="testimonial__position--icon"
                src={test1}
                alt="icon"
            />
            <img
                className="testimonial__position--author__img"
                src={test1}
                alt="img"
            />
            <img
                className="testimonial__position--author__img2"
                src={test1}
                alt="img"
            />
        </section>

    )
}
