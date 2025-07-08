import {useEffect, useState} from "react";
import axios from "axios";

export default function Comments(){
    const [userMessage, setUserMessage] = useState({});

    const [messages, setMessages] = useState([]);

    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

    async function postMessage(userMessage){
        const res = await axios.post(`${supabaseUrl}/rest/v1/comments`, userMessage, {
            headers: {
                'Content-Type': 'application/json',
                apikey: supabaseKey,
                Authorization: `Bearer ${supabaseKey}`,
                Prefer: 'return=representation',
            }
        })
        console.log(res.data)
        getMessages()
    }

    async function getMessages() {
        const res = await axios.get(`${supabaseUrl}/rest/v1/comments?order=created_at.desc`, {
            headers: {
                'Content-Type': 'application/json',
                apikey: supabaseKey,
                Authorization: `Bearer ${supabaseKey}`,
                Prefer: 'return=representation',
            }
        });
        console.log(res.data);
        setMessages(res.data);
    }

    useEffect(() => {
        getMessages();
    }, [])
    return(
        <div className="connect_comments">
            <div data-aos="fade-up" className="comments_container">
                <div className='comments_header'>
                    <div className='icon'>
                        <img loading='lazy' src="/images/icons/comments.svg" alt=""/>
                    </div>
                    <h3>
                        Comments
                        <span>({messages.length + 1})</span>
                    </h3>
                </div>
                <form onSubmit={e => {e.preventDefault(); postMessage(userMessage);}}
                      className='comment_form' method="POST">
                    <label data-aos="fade-up" htmlFor="name">Name</label>
                    <input data-aos="fade-up"
                        maxLength={12}
                        onChange={(e) =>
                            setUserMessage((prev) => ({ ...prev, username: e.target.value }))
                        }
                        id="name"
                        required
                        placeholder="Enter your name"
                        type="text"
                    />
                    <label data-aos="fade-up" htmlFor="message">Message</label>
                    <textarea data-aos="fade-up"
                        maxLength={200}
                        onChange={(e) => setUserMessage(prev => ({ ...prev, message: e.target.value }))} id='message' required placeholder='Write your message here...' type="text"/>
                    <label data-aos="fade-up" htmlFor="">Profile Photo (optional)</label>
                    <div data-aos="fade-up" className='file_selector'>
                        <button data-aos="fade-up">
                            Choose profile photo
                            <input type="file"/>
                        </button>
                        <p className='file_size'>Max file size: MB</p>
                    </div>
                    <button data-aos="fade-up" type='submit' className='submit'>Post Comment</button>
                </form>
                <div data-aos="fade-up" className='comments'>
                    <div className="comment pinned">
                        <div className='pinned_icon'>
                            <img loading='lazy' src="/images/icons/pinned.svg" alt="pinned"/>
                            <span>Pinned Comment</span>
                        </div>
                        <div className='content'>
                            <img loading='lazy' className='ava' src='/images/myAva.png' alt="ava"/>
                            <div className='comment_content'>
                                <h4>Melorenz</h4>
                                <p>Thanks for visiting! Contact me if you need anything</p>
                            </div>
                        </div>
                    </div>
                    {messages.map((message) => (
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
                    ))}


                </div>
            </div>

        </div>
    )
}