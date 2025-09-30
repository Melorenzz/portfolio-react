export default function Projects({projects}){
    return(
            <div className='projects'>
                {location.pathname === '/admin' && (
                    <button data-aos="fade-down" className="block add_new">
                        <img loading='lazy' src="/images/icons/plus.svg" alt="plus"/>
                    </button>
                )}
                {projects.map((project, index) => (
                    <div data-aos={`fade-${project.anim}`} key={index} className="block">
                        <div>
                            <img loading='lazy' className='project_thumbnail' src={project.image} alt=""/>
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

    )
}