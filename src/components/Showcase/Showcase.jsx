import {useState} from 'react'
import Modal from './Modal'
export default function Showcase({projects, certificates}) {
    const [selectedCategory, setSelectedCategory] = useState('Certificates')
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [modalImage, setModalImage] = useState(null)

    const techStack = [
        {image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png', title: 'HTML'},
        {image: null, title: 'CSS'},
        {image: null, title: 'JavaScript'},
        {image: null, title: 'SCSS'},
        {image: null, title: 'Tailwind CSS'},
        {image: null, title: 'ReactJS'},
        {image: null, title: 'Vite'},
    ]

    function openModal(image) {
        setIsOpenModal(true)
        setModalImage(image)
    }

    return (
        <section id='showcase' className="section">
            <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} image={modalImage} />
            <div className="container">
                <h2 className='title'> <span>Portfolio Showcase</span> </h2>
                <p className='subtitle'>Explore my journey through projects, certifications, and technical expertise. Each <br /> section represents a milestone in my continuous learning path.</p>
                <div className='showcase_selector'>
                    <div className='selector'>
                        <button onClick={() => setSelectedCategory('Projects')} className={selectedCategory === 'Projects' ? 'item_active' : 'item'}>
                            <img src="" alt=""/>
                            Projects
                        </button>
                        <button onClick={() => setSelectedCategory('Certificates')} className={selectedCategory === 'Certificates' ? 'item_active' : 'item'}>
                            <img src="" alt=""/>
                            Certificates
                        </button>
                        <button onClick={() => setSelectedCategory('Tech Stack')} className={selectedCategory === 'Tech Stack' ? 'item_active' : 'item'}>
                            <img src="" alt=""/>
                            Tech Stack
                        </button>
                    </div>
                    {selectedCategory === 'Projects' && (
                        <div className='projects'>
                            {projects.map((project, index) => (
                            <div key={index} className="block">
                                <div>
                                    <img className='project_thumbnail' src={project.image} alt=""/>
                                    <h3 className='project_name'>{project.title}</h3>
                                    <p className='project_description'>{project.description}</p>
                                </div>
                                <div className='buttons'>
                                    <a href="">Live Demo</a>
                                    <button>Details -></button>
                                </div>
                            </div>
                            ))}
                        </div>

                    )}
                    {selectedCategory === 'Certificates' && (
                        <div className='certificates'>
                            {certificates.map((certificate, index) => (
                            <button onClick={() => openModal(certificate.image)} key={index} className="block">
                                <div className='open'>
                                    open
                                </div>
                                <img className='certificate_image' src={certificate.image} alt=""/>
                            </button>
                            ))}
                        </div>
                    )}
                    {selectedCategory === 'Tech Stack' && (
                        <div className='tech_stack'>
                            {techStack.map((techStack, index) => (
                            <div key={index} className="block">
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