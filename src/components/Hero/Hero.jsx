import React, { useEffect } from 'react'
import './Hero.css'
import AOS from "aos";
import "aos/dist/aos.css"; // Импорт стилей AOS

const Hero = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000, // Длительность анимации в миллисекундах
          once: true,     // Анимация срабатывает только один раз при скролле
        });
      }, []);
    

  return (
    <>
    <section>
        <div className="container">
            <div className="hero_wrapper">
                <div data-aos="zoom-in-down" 
                data-aos-delay="200"
                className="hero_box"></div>

                <div data-aos="zoom-in-down" 
                data-aos-delay="400"
                className="hero_box"></div>

                <div data-aos="zoom-in-down" 
                data-aos-delay="600"
                className="hero_box"></div>
            </div>
            <div className="hero_wrapper">
                <div data-aos="zoom-in-down" 
                data-aos-delay="800"
                className="hero_box"></div>

                <div data-aos="zoom-in-down" 
                data-aos-delay="1000"
                className="hero_box"></div>

                <div data-aos="zoom-in-down" 
                data-aos-delay="1200"
                className="hero_box"></div>
            </div>
            <div className="hero_wrapper">
                <div data-aos="zoom-in-down" 
                data-aos-delay="1400"
                className="hero_box"></div>

                <div data-aos="zoom-in-down" 
                data-aos-delay="1600"
                className="hero_box"></div>

                <div data-aos="zoom-in-down" 
                data-aos-delay="1800"
                className="hero_box"></div>
            </div>
            <div className="hero_wrapper">
                <div data-aos="zoom-in-down" 
                data-aos-delay="200"
                className="hero_box"></div>

                <div data-aos="zoom-in-down" 
                data-aos-delay="400"
                className="hero_box"></div>

                <div data-aos="zoom-in-down" 
                data-aos-delay="600"
                className="hero_box"></div>
            </div>
            <div className="hero_wrapper">
                <div data-aos="zoom-in-down" 
                data-aos-delay="200"
                className="hero_box"></div>

                <div data-aos="zoom-in-down" 
                data-aos-delay="400"
                className="hero_box"></div>

                <div data-aos="zoom-in-down" 
                data-aos-delay="600"
                className="hero_box"></div>
            </div>
            <div className="hero_wrapper">
                <div data-aos="zoom-in-down" 
                data-aos-delay="200"
                className="hero_box"></div>

                <div data-aos="zoom-in-down" 
                data-aos-delay="400"
                className="hero_box"></div>

                <div data-aos="zoom-in-down" 
                data-aos-delay="600"
                className="hero_box"></div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero