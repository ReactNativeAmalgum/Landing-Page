import React, { useState } from 'react'

import cat1 from '../../assets/img/other/categories1.png'
import cat2 from '../../assets/img/other/categories2.png'
import cat3 from '../../assets/img/other/categories3.png'
import './propertDealer.css'
export default function Properites() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsActive(!isActive);
    };
    return (
        <section className="categories__section section--padding">
            <div className="container">
                <div
                    className="section__heading text-center mb-50 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration={1200}
                    data-aos-delay={50}
                >
                    <h3 className="section__heading--subtitlee">
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
                        <div style={{ color: '#FA4A4A' }} className='real'>
                            FIND YOUR LAND
                        </div>
                    </h3>
                    <h2 className="section__heading--title">Land Categories</h2>
                </div>
                <div className="categories__inner row mb--n30">
                    <div
                        className="col-lg-6 col-md-6 col-sm-6 mb-30 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration={1200}
                        data-aos-delay={100}
                    >
                        <div className="categories__box">
                            <div className="categories__thumbnail text-center">
                                <img
                                    src={cat1}
                                    alt="categories-img"
                                />
                            </div>
                            <div className="categories__content text-center">
                                <h3 className="categories__title">
                                    <a
                                        href="./listing-details.html"
                                        className={isActive ? 'active' : ''}
                                        onClick={handleClick}
                                    >
                                        Commercial Property
                                    </a>
                                </h3>
                                <p className="categories__desc">
                                Lorem ipsum odor amet, consectetuer adipiscing elit. Tincidunt dictum hendrerit id nisl nam consequat morbi molestie. Ullamcorper euismod ex eu erat amet cursus a.
                                </p>
                                {/* <h3 className="categories__title">
                                    <a
                                        href="./listing-details.html"
                                        className={isActive ? 'active' : ''}
                                        onClick={handleClick}
                                    >
                                        Single-family home
                                    </a>
                                </h3> */}

                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-6 col-md-6 col-sm-6 mb-30 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-duration={1200}
                        data-aos-delay={150}
                    >
                        <div className="categories__box">
                            <div className="categories__thumbnail text-center">
                                <img
                                    src={cat2}
                                    alt="categories-img"
                                />
                            </div>
                            <div className="categories__content text-center">
                                <h3 className="categories__title">
                                    <a
                                        href="./listing-details.html"
                                        className={isActive ? 'active' : ''}
                                        onClick={handleClick}
                                    >
                                        Residential Property

                                    </a>
                                </h3>
                                <p className="categories__desc">
                                Lorem ipsum odor amet, consectetuer adipiscing elit. Tincidunt dictum hendrerit id nisl nam consequat morbi molestie. Ullamcorper euismod ex eu erat amet cursus a.
                                </p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}
