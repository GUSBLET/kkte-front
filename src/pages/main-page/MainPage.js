import React, {useEffect, useState} from "react";
import NewsItem from './NewsItem'
import About from './About'
import Faculty from './Faculty'
import Hero from "./Hero";
import NewsService from './../../services/NewsService'
import ContactAndMap from "./ContactAndMap";

function MainPage(){

    const [news, setNews] = useState([]);
    const newsService = new NewsService();

    useEffect(() => {
        fetchData();
    }, []); // Пустой массив вторым аргументом означает, что эффект будет вызван только при монтировании компонента

    const fetchData = async () => {
        try {
            const response = await newsService.getNewsCards(); // Вызываем метод через экземпляр сервиса
            setNews(response);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    return(
        <main>
            <article>
            <Hero />
            <About />
            <Faculty />
                <section className="section news" aria-label="news-label" id="news">
                    <div className="container">

                        <h2 className="pre-title section-title text-center">Остані Новини</h2>

                        <div className="post-filter container">
                            <span className="filter-item active-filter" data-filter="all">All</span>
                            <span className="filter-item" data-filter="tech">Tech</span>
                            <span className="filter-item" data-filter="food">Event</span>
                            <span className="filter-item" data-filter="news">News</span>
                        </div>

                        <ul className="grid-list">
                            {news.map(n => <NewsItem key={n.id} item={n} />)}
                        </ul>

                        <a href="#" className="btn btn-primary">
                            <span className="text text-1">Показати Більше</span>

                            <span className="text text-2" aria-hidden="true">Показати Більше</span>
                        </a>
                    </div>
                </section>
            <ContactAndMap />
            </article>

        </main>

    );
}


export default MainPage;