import {useState, useMemo} from 'react'
import Projects from "../UI/Projects.jsx";
import Certificates from "../UI/Certificates.jsx";
import TechStack from "../UI/TechStack.jsx";
import Skeleton from "../UI/Skeleton.jsx";
export default function Showcase({projects, certificates, loading}) {
    const [selectedCategory, setSelectedCategory] = useState('Projects')
    const techStack = useMemo(() =>
        [
            {image: '/portfolio-react/images/icons/html-icon.svg', title: 'HTML', anim: 'right'},
            {image: '/portfolio-react/images/icons/css-icon.svg', title: 'CSS', anim: 'down'},
            {image: '/portfolio-react/images/icons/javascript-icon.svg', title: 'JavaScript', anim: 'left'},
            {image: '/portfolio-react/images/icons/sass-icon.svg', title: 'SCSS', anim: 'right'},
            {image: '/portfolio-react/images/icons/tailwind-css-icon.svg', title: 'Tailwind CSS', anim: 'down'},
            {image: '/portfolio-react/images/icons/react-js-icon.svg', title: 'ReactJS', anim: 'left'},
            {image: '/portfolio-react/images/icons/vite-icon.svg', title: 'Vite', anim: 'right'},
            {image: '/portfolio-react/images/icons/typescript.svg', title: 'TypeScript', anim: 'right'},
            {image: '/portfolio-react/images/icons/zustand.svg', title: 'Zustand', anim: 'down'},

        ]
    , [])
    return (
        <section id='showcase' className="section">
            <div className="container">
                <h2 data-aos="fade-up" className='title'> <span>Portfolio Showcase</span> </h2>
                <p data-aos="fade-up" className='subtitle'>Explore my journey through projects, certifications, and technical expertise. Each <br /> section represents a milestone in my continuous learning path.</p>
                <div className='showcase_selector'>
                    <div className='selector'>
                        <button onClick={() => setSelectedCategory('Projects')}
                                className={selectedCategory === 'Projects' ? 'item_active' : 'item'}>
                            <img loading='lazy' src="/portfolio-react/images/icons/projects.svg" alt=""/>
                            Projects
                        </button>
                        <button onClick={() => setSelectedCategory('Certificates')}
                                className={selectedCategory === 'Certificates' ? 'item_active' : 'item'}>
                            <img loading='lazy' src="/portfolio-react/images/icons/certificates.svg" alt=""/>
                            Certificates
                        </button>
                        <button onClick={() => setSelectedCategory('Tech Stack')}
                                className={selectedCategory === 'Tech Stack' ? 'item_active' : 'item'}>
                            <img loading='lazy' src="/portfolio-react/images/icons/tech-stack.svg" alt=""/>
                            Tech Stack
                        </button>
                    </div>
                    {loading ? (
                        <>
                        {selectedCategory === 'Projects' && (
                            <Skeleton type="projects" count={3} />
                        )}
                        {selectedCategory === 'Certificates' && (
                            <Skeleton type="certificates" count={4} />
                        )}
                        {selectedCategory === 'Tech Stack' && (
                            <Skeleton type="techStack" count={7} />
                        )}
                        </>
                    ) : (
                        <>
                        {selectedCategory === 'Projects' && (
                        <Projects projects={projects} />
                    )}
                    {selectedCategory === 'Certificates' && (
                        <Certificates certificates={certificates} />
                    )}
                    {selectedCategory === 'Tech Stack' && (
                        <TechStack techStack={techStack} />
                    )}
                        </>
                    )}


                    
                </div>
            </div>
        </section>
    )
}