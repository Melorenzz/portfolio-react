import {useEffect, useState} from "react";
import axios from "axios";
import ButtonForm from "../../UI/ButtonForm.jsx";
import Comment from "../../UI/Comment.jsx";
import InputForm from "../../UI/InputForm.jsx";
import TextareaForm from "../../UI/TextareaForm.jsx";
import {getComments, postMessage} from "../../../api.js";

export default function Comments(){
    const [userComment, setUserComment] = useState({});

    const [comments, setComments] = useState([]);

    const [isDisabledPost, setIsDisabledPost] = useState(false);

    // async function postMessage(userMessage){
    //     const res = await axios.post(`${supabaseUrl}/rest/v1/comments`, userMessage, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             apikey: supabaseKey,
    //             Authorization: `Bearer ${supabaseKey}`,
    //             Prefer: 'return=representation',
    //         }
    //     })
    //     console.log(res.data)
    //     getMessages()
    // }

    // async function getMessages() {
    //     const res = await axios.get(`${supabaseUrl}/rest/v1/comments?order=created_at.desc`, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             apikey: supabaseKey,
    //             Authorization: `Bearer ${supabaseKey}`,
    //             Prefer: 'return=representation',
    //         }
    //     });
    //     console.log(res.data);
    //     setMessages(res.data);
    // }
    async function fetchComments() {
        try{
            const data = await getComments()
            setComments(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchComments()
    }, [])
    async function postComment() {
        try {
            await postMessage(userComment);
            fetchComments()
            setIsDisabledPost(true)
            setTimeout(() => {
                setIsDisabledPost(false)
            }, 30000)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div className="connect_comments">
            <div data-aos="fade-up" className="comments_container">
                <div className='comments_header'>
                    <div className='icon'>
                        <img loading='lazy' src="/images/icons/comments.svg" alt=""/>
                    </div>
                    <h3>
                        Comments
                        <span>({comments.length + 1})</span>
                    </h3>
                </div>
                <form onSubmit={e => {e.preventDefault(); postComment();}}
                      className='comment_form' method="POST">
                    <label data-aos="fade-up" htmlFor="name">Name</label>

                    <InputForm onChange={ (e) =>
                        setUserComment((prev) => ({ ...prev, username: e.target.value })) } id='name'  placeholder='Enter your name' maxLength='12'
                    />
                    <label data-aos="fade-up" htmlFor="message">Message</label>
                    <TextareaForm
                        maxLength={200}
                        id="message"
                        required
                        placeholder="Write your message here..."
                        value={userComment.message}
                        onChange={(e) =>
                            setUserComment((prev) => ({ ...prev, message: e.target.value }))
                        }
                    />

                    <label data-aos="fade-up" htmlFor="">Profile Photo (optional)</label>
                    <div data-aos="fade-up" className='file_selector'>
                        <button data-aos="fade-up">
                            Choose profile photo
                            <input type="file"/>
                        </button>
                        <p className='file_size'>Max file size: MB</p>
                    </div>
                    <ButtonForm disabled={isDisabledPost}>Post Comment</ButtonForm>
                    {/*<button data-aos="fade-up" type='submit' className='submit'>Post Comment</button>*/}
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
                    {comments.map((message) => (
                        <Comment message={message} key={message.id} />
                    ))}


                </div>
            </div>

        </div>
    )
}