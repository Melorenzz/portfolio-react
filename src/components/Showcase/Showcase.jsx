import {useState, useMemo} from 'react'
import Modal from './Modal.jsx'
import { useLocation } from "react-router-dom";
export default function Showcase({projects, certificates}) {
    const location = useLocation();
    const [selectedCategory, setSelectedCategory] = useState('Projects')
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [modalImage, setModalImage] = useState(null)

    const techStack = useMemo(() =>
        [
            {image: '/images/icons/html-icon.svg', title: 'HTML', anim: 'right'},
            {image: '/images/icons/css-icon.svg', title: 'CSS', anim: 'down'},
            {image: '/images/icons/javascript-icon.svg', title: 'JavaScript', anim: 'left'},
            {image: '/images/icons/sass-icon.svg', title: 'SCSS', anim: 'right'},
            {image: '/images/icons/tailwind-css-icon.svg', title: 'Tailwind CSS', anim: 'down'},
            {image: '/images/icons/react-js-icon.svg', title: 'ReactJS', anim: 'left'},
            {image: '/images/icons/vite-icon.svg', title: 'Vite', anim: 'right'},
        ]
    , [])

    function openModal(image) {
        setIsOpenModal(true)
        setModalImage(image)
    }



    return (

        <section id='showcase' className="section">
            <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} image={modalImage} />
            <div className="container">
                <h2 data-aos="fade-up" className='title'> <span>Portfolio Showcase</span> </h2>
                <p data-aos="fade-up" className='subtitle'>Explore my journey through projects, certifications, and technical expertise. Each <br /> section represents a milestone in my continuous learning path.</p>
                <div className='showcase_selector'>
                    <div className='selector'>
                        <button onClick={() => setSelectedCategory('Projects')}
                                className={selectedCategory === 'Projects' ? 'item_active' : 'item'}>
                            <img src="/images/icons/projects.svg" alt=""/>
                            Projects
                        </button>
                        <button onClick={() => setSelectedCategory('Certificates')}
                                className={selectedCategory === 'Certificates' ? 'item_active' : 'item'}>
                            <img src="/images/icons/certificates.svg" alt=""/>
                            Certificates
                        </button>
                        <button onClick={() => setSelectedCategory('Tech Stack')}
                                className={selectedCategory === 'Tech Stack' ? 'item_active' : 'item'}>
                            <img src="/images/icons/tech-stack.svg" alt=""/>
                            Tech Stack
                        </button>
                    </div>
                    {selectedCategory === 'Projects' && (
                        <div className='projects'>
                            {location.pathname === '/admin' && (
                                <button data-aos="fade-down" className="block add_new">
                                    <img src="/images/icons/plus.svg" alt="plus"/>
                                </button>
                            )}
                            {projects.map((project, index) => (
                                <div data-aos={`fade-${project.anim}`} key={index} className="block">
                                    <div>
                                        <img className='project_thumbnail' src={project.image} alt=""/>
                                        <h3 className='project_name'>{project.title}</h3>
                                        <p className='project_description'>{project.description}</p>
                                    </div>
                                    <div className='buttons'>
                                        <a target='_blank' href={project.url}>Live Demo</a>
                                        <a className='download' href={project.download}>Download &rarr;</a>
                                    </div>
                            </div>
                            ))}
                        </div>

                    )}
                    {selectedCategory === 'Certificates' && (
                        <div className='certificates'>
                            {location.pathname === '/admin' && (
                                <button data-aos="fade-down" className="block add_new">
                                    <img src="/images/icons/plus.svg" alt="plus"/>
                                </button>
                            )}
                            {certificates.map((certificate, index) => (
                            <button data-aos={`fade-${certificate.anim}`} onClick={() => openModal(certificate.image)} key={index} className="block">
                                <div className='open'>
                                    open
                                </div>
                                <img className='certificate_image' src={certificate.image} alt=""/>
                            </button>
                            ))}
                        </div>
                    )}
                    {selectedCategory === 'Tech Stack' && (
                        <div  className='tech_stack'>
                            {location.pathname === '/admin' && (
                                <button data-aos="fade-down" className="block add_new">
                                    <img src="/images/icons/plus.svg" alt="plus"/>
                                </button>
                            )}
                            {techStack.map((techStack, index) => (
                            <div data-aos={`fade-${techStack.anim}`} key={index} className="block">
                                <img src={techStack.image} alt=""/>
                                <span>{techStack.title}</span>
                            </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}