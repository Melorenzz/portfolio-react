export default function Certificates({certificates}){
    return(
        <div className='certificates'>
            {location.pathname === '/admin' && (
                <button data-aos="fade-down" className="block add_new">
                    <img loading='lazy' src="/images/icons/plus.svg" alt="plus"/>
                </button>
            )}
            {certificates.map((certificate, index) => (
                <button data-aos={`fade-${certificate.anim}`} onClick={() => openModal(certificate.image)} key={index} className="block">
                    <div className='open'>
                        open
                    </div>
                    <img loading='lazy' className='certificate_image' src={certificate.image} alt=""/>
                </button>
            ))}
        </div>
    )
}