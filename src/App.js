import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Header from "./components/Header";
import MainPage from "./pages/main-page/MainPage";
import NewsRedactor from "./pages/news/news-redactor/NewsRedactor";
import Footer from "./components/Fotter";
import React from "react";
function App() {
    return (
        <BrowserRouter>
            {/*<Header />*/}
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/news/news-redactor' element={<NewsRedactor />} />
            </Routes>
            {/*<Footer />*/}

        </BrowserRouter>

    );
}

export default App;
