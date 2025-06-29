import {useEffect, useRef} from "react";
import {TypeAnimation} from "react-type-animation";
import lottie from "lottie-web";

function Home() {
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
                    <div data-aos-delay="1000" data-aos="fade-up" className="buttons">
                        <a href='#showcase'>Projects</a>
                        <a href='#'>Contact</a>
                    </div>
                    <div data-aos-delay="1100" data-aos="fade-up" className="socials">
                        <div className="block"></div>
                        <div className="block"></div>
                        <div className="block"></div>
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
    );
}
export default Home;