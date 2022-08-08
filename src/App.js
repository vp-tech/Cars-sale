import React from 'react';
import './index.sass';
import Header from "./components/header/header";
import Page from "./Pages/page";
import {Route, Routes} from 'react-router-dom'

const img404 = 'https://mobimg.b-cdn.net/v3/fetch/2a/2a22073680ed5abc0a0468e9feef5191.jpeg'
function App() {
    return (
        <div className='wrapper'>
            <Header/>
            <Routes>
                <Route path='/' element={<Page img='images/1.jpg' title='Модель 01'/>}/>
                <Route path='/shop' element={<Page img='images/2.jpg' title='Модель 02'/>}/>
                <Route path='/products' element={<Page img='images/3.jpg' title='Модель 03'/>}/>
                <Route path='/*' element={<Page img={img404} title='Вы потерялись 404'/>}/>
            </Routes>

        </div>
    );
}

export default App;
