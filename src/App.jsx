import Header from './components/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
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
        <BrowserRouter>
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/admin" element={<Home/>}/>
                </Routes>
            </main>
            <Footer/>
        </BrowserRouter>
    )
}

export default App
