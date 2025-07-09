export default function TechStack({techStack}){
    return(
        <div  className='tech_stack'>
            {location.pathname === '/admin' && (
                <button data-aos="fade-down" className="block add_new">
                    <img loading='lazy' src="/images/icons/plus.svg" alt="plus"/>
                </button>
            )}
            {techStack.map((techStack, index) => (
                <div data-aos={`fade-${techStack.anim}`} key={index} className="block">
                    <img loading='lazy' src={techStack.image} alt=""/>
                    <span>{techStack.title}</span>
                </div>
            ))}
        </div>
    )
}