import React from "react";

function About() {
    return (
        <section className="section about text-center" aria-labelledby="about-label" id="about">
            <div className="container">

                <div className="about-content">

                    <p className="label-2 section-subtitle" id="about-label">Про Нас</p>

                    <h2 className="pre-title section-title">Lorem ipsum dolor sit amet.</h2>

                    <p className="section-text">
                        Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the
                        industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book It has survived not only five centuries, but also the leap into.
                    </p>

                    <a href="#" className="btn btn-primary">
                        <span className="text text-1">Читати Більше</span>

                        <span className="text text-2" aria-hidden="true">Читати Більше</span>
                    </a>

                </div>

                <figure className="about-banner">

                    <img src="/images/aboutus.jpg" width="570" height="570" loading="lazy" alt="about banner"
                         className="w-100" />

                </figure>
            </div>
        </section>
    );
}

export default About;
