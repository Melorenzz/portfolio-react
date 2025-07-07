import {useEffect, useRef} from "react";
import {TypeAnimation} from "react-type-animation";
import lottie from "lottie-web";
import About from "../About/About.jsx";
import Showcase from "../Showcase/Showcase.jsx";
import Connect from '../../components/Connect/Connect'

function Home() {
    const projects = [
        {image: 'https://misha.swit.vn.ua/less41-42/Screenshot_4.png', title: 'Less41-42', description: '3d model on the site', anim: 'right', url: 'https://misha.swit.vn.ua/less41-42/index.html', download: 'https://misha.swit.vn.ua/less41-42/less41-42.zip'},
        {image: null, title: 'Project title', description: 'Project description', anim: 'down'},
        {image: null, title: 'Project title', description: 'Project description', anim: 'left'},
        // {image: null, title: 'Project title', description: 'Project description', anim: 'right'},
        // {image: null, title: 'Project title', description: 'Project description', anim: 'down'},
        // {image: null, title: 'Project title', description: 'Project description', anim: 'left'},
    ]
    const certificates = [
        {
            image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
            title: 'Certificate title',
            link: '',
            anim: 'right'
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
            title: 'Certificate title',
            link: '',
            anim: 'down'
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
            title: 'Certificate title',
            link: '',
            anim: 'left'
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
            title: 'Certificate title',
            link: '',
            anim: 'right'
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
            title: 'Certificate title',
            link: '',
            anim: 'down'
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
            title: 'Certificate title',
            link: '',
            anim: 'left'
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
            title: 'Certificate title',
            link: '',
            anim: 'right'
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
            title: 'Certificate title',
            link: '',
            anim: 'down'
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
            title: 'Certificate title',
            link: '',
            anim: 'left'
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
            title: 'Certificate title',
            link: '',
            anim: 'right'
        },
    ]
    const lottieRef = useRef(null);
    console.log("Home render");
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
                            <div className="tag">React</div>
                            <div className="tag">JavaScript</div>
                            <div className="tag">SCSS</div>
                            <div className="tag">Tailwind</div>
                        </div>
                        <nav data-aos-delay="1000" data-aos="fade-up" className="buttons">
                            <a href='#showcase'>Projects</a>
                            <a href='#contact'>Contact</a>
                        </nav>
                        <div data-aos-delay="1100" data-aos="fade-up" className="socials">
                            <a href='https://github.com/Melorenzz' className="block">
                                <img src="/images/icons/github.svg" alt=""/>
                            </a>
                            <a href='https://www.linkedin.com/in/mykhailo-voronov-3630a7356/' className="block">
                                <img src="/images/icons/linkedin.svg" alt=""/>

                            </a>
                            <a href='https://www.instagram.com/melorenz_/' className="block">
                                <img src="/images/icons/instagram.svg" alt=""/>

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
            <Connect />
        </>
    );
}

export default Home;