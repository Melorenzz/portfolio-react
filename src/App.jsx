import Header from './components/Layout/Header.jsx'
import Home from './components/Sections/Home.jsx'
import Footer from './components/Layout/Footer.jsx'
import {useEffect} from "react";
import AOS from 'aos';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return (
        <>
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/admin" element={<Home/>}/>
                </Routes>
            </main>
            <Footer/>
        </>
    )
}

export default App
