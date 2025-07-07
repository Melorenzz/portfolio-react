import Comments from "./Comments";

export default function Connect(){

    return(
        <section id="contact">
            <div className="container">
                <h2 data-aos="fade-up" className='title'><span>Connect with me</span></h2>
                <p data-aos="fade-up" className='subtitle'>Got a question? Send me a message and I’ll get back to you shortly.</p>
                <div className='connect_container'>
                    <div className='connect'>
                        <h2 data-aos="fade-up" className='title'><span>Contact</span></h2>
                        <p data-aos="fade-up" className='subtitle'>WILL BE ADDED IN FUTURE UPDATES</p>
                        <form>
                            <input data-aos="fade-up" placeholder='Name' type="text"/>
                            <input data-aos="fade-up" placeholder='Email' type="text"/>
                            <textarea data-aos="fade-up" placeholder='Message' name="" id="" cols="30" rows="10">
                            </textarea>
                            <button data-aos="fade-up" className='submit'>Send</button>
                        </form>
                    </div>
                    <Comments />
                </div>
            </div>

        </section>
    )
}