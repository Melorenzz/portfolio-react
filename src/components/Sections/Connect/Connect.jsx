import Comments from "./Comments.jsx";
import ButtonForm from "../../UI/ButtonForm.jsx";
import InputForm from "../../UI/InputForm.jsx";
import TextareaForm from "../../UI/TextareaForm.jsx";

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
                            <InputForm placeholder='Name' maxLength='12'></InputForm>
                            <InputForm placeholder='Email'></InputForm>
                            <TextareaForm placeholder='Message' />
                            <ButtonForm>Send</ButtonForm>
                            {/*<button data-aos="fade-up" className='submit'>Send</button>*/}
                        </form>
                    </div>
                    <Comments />
                </div>
            </div>

        </section>
    )
}