import React from "react";
import {NavLink} from "react-router-dom";

function Hero() {
    return (<section className="hero text-center" aria-label="home" id="home">

            <ul className="hero-slider" data-hero-slider>

                <li className="slider-item active" data-hero-slider-item>
                    <div className="slider-bg">
                        <img src="/images/slider-1.jpg" width="1880" height="950" alt="" className="img-cover"/>
                    </div>

                    <h1 className="slider-text hero-title slider-reveal">
                        Lorem ipsum dolor sit. <br/>
                        Lorem, ipsum.
                    </h1>

                    <p className="slider-body hero-text slider-reveal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, voluptatibus!
                    </p>

                    <a href="#about" className="btn btn-primary slider-reveal">
                        <span className="text text-1">Про нас</span>

                        <span className="text text-2" aria-hidden="true">Про нас</span>
                    </a>

                </li>

                <li className="slider-item" data-hero-slider-item>

                    <div className="slider-bg">
                        <img src="/images/slider-2.webp" width="1880" height="950" alt="" className="img-cover"/>
                    </div>

                    <h1 className="slider-text hero-title slider-reveal">
                        Lorem, ipsum dolor. <br/>
                        Lorem, ipsum dolor. <br/>
                    </h1>

                    <p className="slider-body hero-text slider-reveal">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, nam!
                    </p>

                    <a href="#about" className="btn btn-primary slider-reveal">
                        <span className="text text-1">Про нас</span>

                        <span className="text text-2" aria-hidden="true">Про нас</span>
                    </a>

                </li>

                <li className="slider-item" data-hero-slider-item>

                    <div className="slider-bg">
                        <img src="/images/slider-3.webp" width="1880" height="950" alt="" className="img-cover"/>
                    </div>

                    <h1 className="slider-text hero-title slider-reveal">
                        Lorem, ipsum dolor. <br/>
                        Lorem, ipsum dolor.
                    </h1>

                    <p className="slider-body hero-text slider-reveal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quo.
                    </p>

                    <NavLink to="#about" className="btn btn-primary slider-reveal">
                        <span className="text text-1">Про нас</span>

                        <span className="text text-2" aria-hidden="true">Про нас</span>
                    </NavLink>

                </li>

            </ul>

            <button className="slider-btn prev" aria-label="slide to previous" data-prev-btn>
                <ion-icon name="chevron-back"></ion-icon>
            </button>

            <button className="slider-btn next" aria-label="slide to next" data-next-btn>
                <ion-icon name="chevron-forward"></ion-icon>
            </button>

        </section>);
}

export default Hero;