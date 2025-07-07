import {useEffect, useState} from "react";
import axios from 'axios';
export default function Connect(){
    const [userMessage, setUserMessage] = useState({ username: "Test", message: "Hello from React!" });

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
        <section>
            <div className="container">
                <h2 className='title'><span>Conncet with me</span></h2>
                <p className='subtitle'>Punya pertanyaan? Kirimi saya pesan, dan saya akan segera membalasnya.</p>
                <div className='connect_container'>
                    <div>

                    </div>
                    <div className="connect_comments">
                        <div className="comments_container">
                            <div className='comments_header'>
                                <div className='icon'>
                                    <img src="" alt=""/>
                                </div>
                                <h3>
                                    Comments
                                    <span>(48)</span>
                                </h3>
                            </div>
                            <form onSubmit={e => {e.preventDefault(); postMessage(userMessage);}}
                                  className='comment_form' method="POST">
                                <label htmlFor="name">Name</label>
                                <input
                                    maxLength={12}
                                    onChange={(e) =>
                                        setUserMessage((prev) => ({ ...prev, username: e.target.value }))
                                    }
                                    id="name"
                                    required
                                    placeholder="Enter your name"
                                    type="text"
                                />
                                <label htmlFor="message">Message</label>
                                <textarea
                                    maxLength={200}
                                    onChange={(e) => setUserMessage(prev => ({ ...prev, message: e.target.value }))} id='message' required placeholder='Write your message here...' type="text"/>
                                <label htmlFor="">Profile Photo (optional)</label>
                                <div className='file_selector'>
                                    <button>
                                        Choose profile photo
                                        <input type="file"/>
                                    </button>
                                    <p className='file_size'>Max file size: MB</p>
                                </div>
                                <button type='submit' className='submit'>Post Comment</button>
                            </form>
                            <div className='comments'>
                                {messages.map((message) => (
                                    <div key={message.id} className="comment">
                                        <img src="" alt=""/>
                                        <div className='comment_content'>
                                            <h4>{message.username}</h4>
                                            <p>{message.message}</p>
                                        </div>
                                    </div>
                                ))}


                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}