import React from "react";
import Card from "../UI/Card.jsx";

function About({projects, certificates}) {

    return(
       <section className='about' id='About'>
           <div className="container">
               <h2 data-aos="zoom-in-up" className='title'> <span>About me</span> </h2>
               <p data-aos="zoom-in-up"  className='subtitle'>Transforming ideas into digital experiences</p>
                <div className='about_container'>
                    <div>
                        <h2 data-aos="fade-right"><span>Hello, I'm</span> <br />
                            Mykhailo
                            Voronov
                        </h2>
                        <p data-aos="fade-right" className='subtitle'>
                            A self-taught Front-End developer with a strong passion for creating engaging and user-friendly digital experiences. Deeply interested in Front-End technologies, I constantly explore new tools and trends to improve my skills. I always aim to deliver high-quality and effective solutions in every project I work on.
                        </p>
                        <div data-aos="fade-up" className='about_buttons'>
                            <a target='_blank' href='/portfolio-react/MelorenzCV.pdf' download={true}>Download CV</a>
                            <a href='#showcase'>View Projects</a>
                        </div>

                    </div>
                    <div data-aos="fade-left">
                        <div  className='my_ava'>
                            <img
                                loading='lazy'
                                src="/portfolio-react/images/myAva.png"
                                alt=""/>
                            <div className="pulse-ring"></div>
                        </div>
                    </div>

                </div>
               <div className='about_columns'>
                   <Card icon='/portfolio-react/images/icons/total_projects.svg' link='#showcase' count={projects.length} title='TOTAL PROJECTS' description='Innovative web solutions crafted' />
                   <Card icon='/portfolio-react/images/icons/certificates_card.svg' link='#showcase' count={certificates.length} title='CERTIFICATES' description='Professional skills validated' />
                   <Card icon='/portfolio-react/images/icons/experience.svg' link='#showcase' count={1} title='YEARS OF EXPERIENCE' description='Continuous learning journey' />

               </div>
           </div>
       </section>
    )
}
export default React.memo(About);