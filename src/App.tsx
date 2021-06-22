import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Technologies} from "./components/Technologies/Technologies";
import Footer from "./components/Footer/Footer";




const App = () => {
    return (
        <div>
            <Header/>
            <Technologies/>
            <Footer/>
        </div>
    );
}

export default App;
