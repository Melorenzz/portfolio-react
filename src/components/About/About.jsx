import React from "react";

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
                            <a>Download CV</a>
                            <a href='#showcase'>View Projects</a>
                        </div>

                    </div>
                    <div data-aos="fade-left">
                        <div  className='my_ava'>
                            <img
                                src="/images/myAva.png"
                                alt=""/>
                            <div className="pulse-ring"></div>
                        </div>
                    </div>

                </div>
               <div className='about_columns'>
                    <a href='#showcase' className='about_column'>
                        <div className='top_column'>
                            <div className='icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="white" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="lucide lucide-code w-8 h-8">
                                    <polyline points="16 18 22 12 16 6"></polyline>
                                    <polyline points="8 6 2 12 8 18"></polyline>
                                </svg>

                            </div>
                            <span data-aos="fade-left" className='count'>{projects.length}</span>
                        </div>
                        <div className='info'>

                            <p data-aos="fade-up" className='column_title'>TOTAL PROJECTS</p>
                            <div className='description'>
                            <p data-aos="fade-up">Innovative web solutions crafted</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="lucide lucide-arrow-up-right w-4 h-4 text-white/50 group-hover:text-white transition-colors">
                                    <path d="M7 7h10v10"></path>
                                    <path d="M7 17 17 7"></path>
                                </svg>
                            </div>
                        </div>
                    </a>

                    <a href='#showcase'  className='about_column'>
                        <div className='top_column'>
                            <div className='icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award w-8 h-8">
                                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                                    <circle cx="12" cy="8" r="6"></circle>
                                </svg>

                            </div>
                            <span data-aos="fade-left" className='count'>{certificates.length}</span>
                        </div>
                        <div className='info'>
                            <p data-aos="fade-up" className='column_title'>CERTIFICATES</p>
                            <div className='description'>
                                <p data-aos="fade-up">Professional skills validated</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="lucide lucide-arrow-up-right w-4 h-4 text-white/50 group-hover:text-white transition-colors">
                                    <path d="M7 7h10v10"></path>
                                    <path d="M7 17 17 7"></path>
                                </svg>
                            </div>
                        </div>
                    </a>
                    <a href='#showcase' className='about_column'>
                        <div className='top_column'>
                            <div className='icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe w-8 h-8">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                    <path d="M2 12h20"></path>
                                </svg>

                            </div>
                            <span data-aos="fade-left" className='count'>1</span>
                        </div>
                        <div className='info'>
                            <p data-aos="fade-up" className='column_title'>YEARS OF EXPERIENCE</p>
                            <div className='description'>
                                <p data-aos="fade-up">Continuous learning journey</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="lucide lucide-arrow-up-right w-4 h-4 text-white/50 group-hover:text-white transition-colors">
                                    <path d="M7 7h10v10"></path>
                                    <path d="M7 17 17 7"></path>
                                </svg>
                            </div>
                        </div>
                    </a>
               </div>
           </div>
       </section>
    )
}
export default React.memo(About);