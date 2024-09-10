import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import herohtumb3 from '../../assets/img/hero/hero-htumb3.png'
import herohtumb1 from '../../assets/img/hero/hero-htumb1.png'
import herohtumb2 from '../../assets/img/hero/hero-htumb2.png'

import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import '../../App.css'
import './Banner.css'
import { Button, Modal, Form, Input, message } from 'antd';

export default function Banner() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        // Optionally, you can validate and submit the form here
        form
            .validateFields()
            .then(values => {
                console.log('Received values of form: ', values);
                message.success('Enquiry submitted successfully!');
                setIsModalOpen(false);
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [form] = Form.useForm();
    return (
        <div className='continer' >
            <div className='banner-row row'>
                <div className='custom-col-left col-6'>
                    <div className="hero__content--heading">
                        <h3 style={{ color: '#FA4A4A', fontWeight: 600 }} className="hero__content--heading__subtitle h5">
                            <svg
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_15_6)">
                                    <path
                                        d="M9.00021 4.72925L2.5806 10.0215C2.5806 10.029 2.57872 10.04 2.57497 10.055C2.57129 10.0698 2.56934 10.0806 2.56934 10.0883V15.4473C2.56934 15.6408 2.64008 15.8085 2.78152 15.9497C2.92292 16.091 3.09037 16.1621 3.2839 16.1621H7.571V11.8747H10.4295V16.1622H14.7165C14.91 16.1622 15.0777 16.0913 15.2189 15.9497C15.3603 15.8086 15.4313 15.6408 15.4313 15.4473V10.0883C15.4313 10.0586 15.4272 10.0361 15.4201 10.0215L9.00021 4.72925Z"
                                        fill="#F23B3B"
                                    />
                                    <path
                                        d="M17.8758 8.81572L15.4309 6.78374V2.2285C15.4309 2.12437 15.3974 2.03872 15.3302 1.9717C15.2636 1.90475 15.178 1.87128 15.0736 1.87128H12.93C12.8258 1.87128 12.7401 1.90475 12.6731 1.9717C12.6062 2.03872 12.5727 2.1244 12.5727 2.2285V4.4056L9.8486 2.12792C9.61069 1.93439 9.3278 1.83765 9.00026 1.83765C8.67275 1.83765 8.3899 1.93439 8.15175 2.12792L0.124063 8.81572C0.0496462 8.87516 0.00885955 8.95517 0.00127316 9.05567C-0.00627412 9.15609 0.0197308 9.2438 0.079366 9.31818L0.771565 10.1444C0.831201 10.2113 0.909254 10.2523 1.00604 10.2673C1.09539 10.2748 1.18475 10.2486 1.27411 10.1891L9.00002 3.74687L16.726 10.1891C16.7857 10.241 16.8637 10.2669 16.9605 10.2669H16.994C17.0907 10.2522 17.1686 10.211 17.2285 10.1442L17.9208 9.31814C17.9803 9.2436 18.0064 9.15605 17.9987 9.05551C17.991 8.95528 17.9501 8.87527 17.8758 8.81572Z"
                                        fill="#F23B3B"
                                    />
                                </g>
                                <defs>
                                    <clipPath>
                                        <rect width={18} height={18} fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Find Your Land
                        </h3>
                        <h1 className="hero__content--heading__title">
                            Find The Best Land <br />
                            On Your.
                        </h1>
                        <p className="hero__content--heading__desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                        </p>
                        <div className="hero__content--footer style2 d-flex align-items-center">
                            <a style={{ textDecoration: 'none' }} className="solid__btn" onClick={showModal} >
                                Make An Enquiry
                            </a>

                        </div>
                        <Modal
                            title="Enquiry Form"
                            open={isModalOpen}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            okText="Submit"
                            cancelText="Cancel"
                        >
                            <Form
                                form={form}
                                layout="vertical"
                                name="enquiryForm"
                                initialValues={{}}
                            >
                                <Form.Item
                                    name="name"
                                    label="Name"
                                    rules={[{ required: true, message: 'Please enter your name!' }]}
                                >
                                    <Input placeholder="Enter your name" />
                                </Form.Item>
                                <Form.Item
                                    name="email"
                                    label="Email"
                                    rules={[
                                        { required: true, message: 'Please enter your email!' },
                                        { type: 'email', message: 'The input is not valid E-mail!' }
                                    ]}
                                >
                                    <Input placeholder="Enter your email" />
                                </Form.Item>
                                <Form.Item
                                    name="message"
                                    label="Message"
                                    rules={[{ required: true, message: 'Please enter your message!' }]}
                                >
                                    <Input.TextArea rows={4} placeholder="Enter your message" />
                                </Form.Item>
                            </Form>
                        </Modal>

                    </div>


                </div>
                <div className='custom-col-right col-6'>
                    <div className="hero__thumbnail--swiper" >
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            loop
                        >
                            <SwiperSlide >
                                <div style={{}} className="hero__thumbnail--slider__items">
                                    <img
                                        className="hero__thumbnail--slider___media"
                                        src={herohtumb1}
                                        alt="hero-thumb"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div style={{}} className="hero__thumbnail--slider__items">
                                    <img
                                        className="hero__thumbnail--slider___media"
                                        src={herohtumb2}
                                        alt="hero-thumb"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div style={{}} className="hero__thumbnail--slider__items">
                                    <img
                                        className="hero__thumbnail--slider___media"
                                        src={herohtumb3}
                                        alt="hero-thumb"
                                    />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>

            </div>
        </div>



    )
}
