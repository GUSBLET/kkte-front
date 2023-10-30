import React from "react";
import {NavLink} from "react-router-dom";


function Faculty(){
    return(
        <section className="faculty text-center" aria-labelledby="faculty-label">

            <div className="faculty-banner">
                <img src="/images/faculty1.jpg" width="940" height="900" loading="lazy" alt="faculty"
                     className="img-cover" />
            </div>

            <div className="faculty-content bg-black-10">
                <div className="container">

                    <img src="/images/hat.png" width="28" height="41" loading="lazy" alt="hat" className="abs-img" />

                        <p className="section-subtitle label-2">Інженерія програмного забезпечення</p>

                        <h2 className="pre-title section-title">Lorem, ipsum.</h2>

                        <p className="section-text">
                            Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the
                            industrys standard dummy text ever since the when an unknown printer took a galley of type.
                        </p>

                        <NavLink to="#" className="btn btn-primary">
                            <span className="text text-1">Показати більше</span>

                            <span className="text text-2" aria-hidden="true">Показати більше</span>
                        </NavLink>

                </div>
            </div>
        </section>
    )
}

export  default Faculty;