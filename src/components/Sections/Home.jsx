import {useEffect, useRef, useState} from "react";
import {TypeAnimation} from "react-type-animation";
import lottie from "lottie-web";
import About from "./About.jsx";
import Showcase from "./Showcase.jsx";
import Connect from './Connect/Connect.jsx'
import axios from "axios";
import {getProjects} from "../../api.js";
import {getCertificates} from "../../api.js";

function Home() {

    const tags = ['React', "JavaScript", "SCSS", "Tailwind"]

    const [projects, setProjects] = useState([]);
    const [certificates, setCertificates] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const [dataProjects, dataCertificates] = await Promise.all([
                    getProjects(),
                    getCertificates()
                ])
                setProjects(dataProjects);
                setCertificates(dataCertificates);
            } catch (error) {
                console.log('Ошибка загрузки:', error);
            }
        }

        fetchData();
    }, []);


    const lottieRef = useRef(null);
    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: lottieRef.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: "/anim.json",
        });

        return () => anim.destroy();
    }, []);

    return (
        <>
            <section className="home_section">
                <div className="container home_main">
                    <div className="left">
                        <h1 data-aos-delay="600" data-aos="fade-up">
                            Frontend <span>Developer</span>
                        </h1>
                        <div data-aos-delay="700" data-aos="fade-up" className="writer">
            <span>
              <TypeAnimation
                  sequence={["Tech Enthusiast", 2000, "Creative Problem Solver", 2000]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
              />
            </span>
                        </div>
                        <p data-aos-delay="800" data-aos="fade-up" className="subtitle">
                            Creating innovative, functional, and user-friendly websites for digital solutions.
                        </p>
                        <div data-aos-delay="900" data-aos="fade-up" className="tags">
                            {tags.map((tag, index) => (
                                <div key={index} className='tag'>{tag}</div>
                            ))}
                        </div>
                        <nav data-aos-delay="1000" data-aos="fade-up" className="buttons">
                            <a href='#showcase'>Projects</a>
                            <a href='#contact'>Contact</a>
                        </nav>
                        <div data-aos-delay="1100" data-aos="fade-up" className="socials">
                            <a href='https://github.com/Melorenzz' className="block">
                                <img loading='lazy' src="/images/icons/github.svg" alt=""/>
                            </a>
                            <a href='https://www.linkedin.com/in/mykhailo-voronov-3630a7356/' className="block">
                                <img loading='lazy' src="/images/icons/linkedin.svg" alt=""/>

                            </a>
                            <a href='https://www.instagram.com/melorenz_/' className="block">
                                <img loading='lazy' src="/images/icons/instagram.svg" alt=""/>
                            </a>
                        </div>
                    </div>

                    {/* Lottie контейнер */}
                    <div data-aos-delay="600" data-aos="fade-left" className="right">
                        <div className='gif' ref={lottieRef}
                             style={{maxWidth: "500px", height: "500px"}}>

                        </div>
                    </div>
                </div>
            </section>
            <About projects={projects} certificates={certificates}/>
            <Showcase projects={projects} certificates={certificates}/>
            <Connect/>
        </>
    );
}

export default Home;