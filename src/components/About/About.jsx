export default function About(){
    return(
       <section className='about_section'>
           <div className="container">
               <h2 className='title'> <span>About me</span> </h2>
               <p className='subtitle'>Transforming ideas into digital experiences</p>
                <div className='about_container'>
                    <div>
                        <h2><span>Hello, I'm</span> <br />
                            Mykhailo
                            Melorenz
                        </h2>
                        <p className='subtitle'>
                            Seorang lulusan Teknik Jaringan Komputer dan Telekomunikasi yang memiliki ketertarikan besar dalam pengembangan Front-End. Saya berfokus pada menciptakan pengalaman digital yang menarik dan selalu berusaha memberikan solusi terbaik dalam setiap proyek yang saya kerjakan.
                        </p>
                        <div className='about_buttons'>
                            <button>Download CV</button>
                            <button>View Projects</button>
                        </div>
                    </div>
                    <div className='my_ava'>

                        <img
                            src="https://img06.rl0.ru/afisha/e1200x800i/daily.afisha.ru/uploads/images/8/8d/88d6442cbd039e053ffd12ada57de486.jpg"
                            alt=""/>
                        <div className="pulse-ring"></div>
                    </div>

                </div>
               <div className='about_columns'>
                    <div className='about_column'>
                        <div className='top_column'>
                            <div className='icon'>
                                <img src="" alt=""/>
                            </div>
                            <span className='count'>13</span>
                        </div>
                        <div className='info'>
                            <p className='column_title'>TOTAL PROJECTS</p>
                            <div className='description'>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <img src="" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className='about_column'>
                        <div className='top_column'>
                            <div className='icon'>
                                <img src="" alt=""/>
                            </div>
                            <span className='count'>13</span>
                        </div>
                        <div className='info'>
                            <p className='column_title'>TOTAL PROJECTS</p>
                            <div className='description'>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <img src="" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className='about_column'>
                        <div className='top_column'>
                            <div className='icon'>
                                <img src="" alt=""/>
                            </div>
                            <span className='count'>13</span>
                        </div>
                        <div className='info'>
                            <p className='column_title'>TOTAL PROJECTS</p>
                            <div className='description'>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <img src="" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
       </section>
    )
}