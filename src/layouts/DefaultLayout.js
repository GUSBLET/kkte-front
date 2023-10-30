import React from 'react';
import {Routes , Route} from 'react-router-dom';
import Header from './../components/Header'
import Footer from './../components/Fotter';
import MainPage from './../pages/main-page/MainPage'

function DefaultLayout(){
    return(
        <div>
            <Header />
                <Routes>
                    <Route path='/' element={<MainPage />} />
                </Routes>
            <Footer />
        </div>

    );
}

export default DefaultLayout;