import React from "react";
import './Footer.css'
import {
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaTwitter,
  Faaedin,
  FaInstagram,
  FaFacebookF,
  FaPhone,
  FaMapPin,
} from "react-icons/fa";
import { CgMail } from "react-icons/cg";


import "./Footer.css";

export default function Footer() {
  return (
    <>
    <section>
    <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3772.569649760874!2d73.11375047520325!3d18.994604082193266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDU5JzQwLjYiTiA3M8KwMDYnNTguOCJF!5e0!3m2!1sen!2sin!4v1725964585526!5m2!1sen!2sin"
          width={'100%'}
          height={450}
          style={{ border: 0, marginBottom:0, bottom:0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

    </section>
      <section className="bottom-bar-cont">

        <div className="bar" />
        <div className="container">
          <div className="footer-row">
            <div className="footer-col-6">
              <h3 style={{ paddingTop: 5 }}>Abouts</h3>
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Senectus elementum penatibus praesent penatibus per nam rhoncus.
              </p>
              <div className=" logo-cont">
                <h2>Logo</h2>
              </div>
            </div>
            <div className="footer-nav-cont  col-2">
              <h3>General</h3>
              <p>
                <a className="footer-nav-cont-p" href="#home">
                  Home
                </a>
              </p>
              <p>
                <a className="footer-nav-cont-p" href="#about">
                  About
                </a>
              </p>
              <p>
                <a className="footer-nav-cont-p" href="#trending">
                  We Provide
                </a>
              </p>
              <p>
                <a className="footer-nav-cont-p" href="#properties">
                  Lands
                </a>
              </p>
              <p>
                <a className="footer-nav-cont-p" href="#Agents">
                  Agents
                </a>
              </p>
              <p>
                <a className="footer-nav-cont-p" href="#contact">
                  Contact Us
                </a>
              </p>
            </div>
            <div className="footer-nav-cont col-2">
              <h3>Connect</h3>
              <div className="social">
                <FaFacebookF className="icon" /> <p>Facebook</p>
              </div>
              <div className="social">
                <FaInstagram className="icon" /> <p>Instagram</p>
              </div>
              <div className="social">
                <FaWhatsapp className="icon" /> <p>WhatsApp</p>
              </div>
            </div>
            <div className="footer-nav-cont col-2">
              <div className="speacial-h3">
                <h3>Contact Us</h3>
              </div>
              <div className="social">
                <CgMail className="icon" /> <p>Lorem@gmail.com</p>
              </div>
              <div className="social">
                <FaPhone className="icon" /> <p>+91-9993711691</p>
              </div>
              <div className="social">
                <FaMapPin className="icon" />{" "}
                <p  > office no.-405, 4th floor, Neelkanth land mark, <br /> panvel 410206
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="copywright">
          <p>2024 ©️ Lorem | All rights reserved | #SKDM</p>
        </div>
      </section>
    </>
  );
}
