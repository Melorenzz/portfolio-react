export default function Showcase() {
    return (
        <section className="section">
            <div className="container">
                <h2 className='title'> <span>Portfolio Showcase</span> </h2>
                <p className='subtitle'>Explore my journey through projects, certifications, and technical expertise. Each <br /> section represents a milestone in my continuous learning path.</p>
                <div className='showcase_selector'>
                    <div className='selector'>
                        <button className="item_active">
                            <img src="" alt=""/>
                            Projects
                        </button>
                        <button className="item">
                            <img src="" alt=""/>
                            Certificates
                        </button>
                        <button className="item">
                            <img src="" alt=""/>
                            Tech Stack
                        </button>
                    </div>
                    <div className='showcase_box'>
                        <div className="block">
                            <img src="" alt=""/>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}