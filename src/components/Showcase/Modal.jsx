export default function Modal({isOpenModal, setIsOpenModal, image}){
    if(!isOpenModal) return null;
    return(
        <div className='modal' onClick={() => setIsOpenModal(false)}>
            <div onClick={(e) => e.stopPropagation()} className='content'>
                <button onClick={() => setIsOpenModal(false)} className='close'>close</button>
                <img loading='lazy' src={image} alt="certificate" />
            </div>
        </div>

    )
}