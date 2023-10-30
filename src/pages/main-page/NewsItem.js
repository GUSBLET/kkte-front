import React from "react";
import {NavLink} from "react-router-dom";

function NewsItem(props) {

    return (
        <li>
            <div className="news-card hover:card">

                <figure className="card-banner img-holder">
                    <img src="/images/news.webp" loading="lazy" alt="New news"
                         className="img-cover"/>
                </figure>

                <div>

                    <div className="title-wrapper">
                        <h3 className="title-3">
                            <NavLink to={"/news/news-page?id=" + props.item.id} class="card-title">{props.item.title}</NavLink>
                        </h3>

                        <span className="span title-2">{props.item.createDateAt}</span>
                    </div>

                    <p className="card-text label-1">
                        {props.item.shortDescription}
                    </p>

                </div>

            </div>
        </li>


    );
}

export default NewsItem;


// <li>
//     <div class="news-card hover:card">
//
//         <figure class="card-banner img-holder">
//             <img src="/images/news.webp" loading="lazy" alt="New news"
//                  class="img-cover" />
//         </figure>
//
//         <div>
//
//             <div class="title-wrapper">
//                 <h3 class="title-3">
//                     <a href="#" class="card-title">New news</a>
//                 </h3>
//
//                 <span class="span title-2">23.09.2023</span>
//             </div>
//
//             <p class="card-text label-1">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             </p>
//
//         </div>
//
//     </div>
// </li>
//
// <li>
//     <div class="news-card hover:card">
//
//         <figure class="card-banner img-holder">
//             <img src="/images/news.webp" loading="lazy" alt="New news"
//                  class="img-cover"/>
//         </figure>
//
//         <div>
//
//             <div class="title-wrapper">
//                 <h3 class="title-3">
//                     <a href="#" class="card-title">New news</a>
//                 </h3>
//
//                 <span class="span title-2">23.09.2023</span>
//             </div>
//
//             <p class="card-text label-1">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis.
//             </p>
//
//         </div>
//
//     </div>
// </li>
//
// <li>
//     <div class="news-card hover:card">
//
//         <figure class="card-banner img-holder">
//             <img src="/images/news.webp" loading="lazy" alt="New news"
//                  class="img-cover"/>
//         </figure>
//
//         <div>
//
//             <div class="title-wrapper">
//                 <h3 class="title-3">
//                     <a href="#" class="card-title">New news</a>
//                 </h3>
//
//                 <span class="span title-2">23.09.2023</span>
//             </div>
//
//             <p class="card-text label-1">
//                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita modi soluta consequuntur quisquam.
//             </p>
//
//         </div>
//
//     </div>
// </li>
//
// <li>
//     <div class="news-card hover:card">
//
//         <figure class="card-banner img-holder">
//             <img src="/images/news.webp" loading="lazy" alt="New news"
//                  class="img-cover"/>
//         </figure>
//
//         <div>
//
//             <div class="title-wrapper">
//                 <h3 class="title-3">
//                     <a href="#" class="card-title">New news</a>
//                 </h3>
//
//                 <span class="span title-2">23.09.2023</span>
//             </div>
//
//             <p class="card-text label-1">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt magnam incidunt aliquam voluptatum, nesciunt neque?
//             </p>
//
//         </div>
//
//     </div>
// </li>
//
// <li>
//     <div class="news-card hover:card">
//
//         <figure class="card-banner img-holder">
//             <img src="/images/news.webp" loading="lazy" alt="New news"
//                  class="img-cover"/>
//         </figure>
//
//         <div>
//
//             <div class="title-wrapper">
//                 <h3 class="title-3">
//                     <a href="#" class="card-title">New news</a>
//                 </h3>
//
//                 <span class="span title-2">23.09.2023</span>
//             </div>
//
//             <p class="card-text label-1">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing.
//             </p>
//
//         </div>
//
//     </div>
// </li>