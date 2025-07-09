export default function Comment({message}){
    return(
        <div key={message.id} className="comment">
            {message.ava ? (<img loading='lazy' className='ava' src={message.ava} alt="ava"/>) : (
                <div className='without_ava'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none" stroke="rgb(124, 141, 241)" stroke-width="2" stroke-linecap="round"
                         stroke-linejoin="round" className="lucide lucide-circle-user-round w-5 h-5">
                        <path d="M18 20a6 6 0 0 0-12 0"></path>
                        <circle cx="12" cy="10" r="4"></circle>
                        <circle cx="12" cy="12" r="10"></circle>
                    </svg>

                </div>
            )}

            <div className='comment_content'>
                <h4>{message.username}</h4>
                <p>{message.message}</p>
            </div>
        </div>
    )
}