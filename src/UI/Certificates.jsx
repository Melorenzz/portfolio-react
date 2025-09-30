import Modal from "./Modal.jsx";
import {useState} from "react";
import {useLocation} from "react-router-dom";

export default function Certificates({certificates}){
    const location = useLocation();
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [modalImage, setModalImage] = useState(null)

    function openModal(image) {
        setIsOpenModal(true)
        setModalImage(image)
    }
    return(
        <div className='certificates'>
            <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} image={modalImage} />
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