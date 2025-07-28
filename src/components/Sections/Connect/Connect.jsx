import Comments from "./Comments.jsx";
import ButtonForm from "../../UI/ButtonForm.jsx";
import InputForm from "../../UI/InputForm.jsx";
import ConnectButton from "../../UI/ConnectButton.jsx";
import TextareaForm from "../../UI/TextareaForm.jsx";

export default function Connect() {

    return (
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
                        <div data-aos="fade-up" className='connect_social'>
                            <div className='header'>
                                <div className="line"></div>
                                <h3>Connect With Me</h3> 
                            </div>
                            <div className="social_links">
                                <ConnectButton link='https://www.linkedin.com/in/mykhailo-voronov-3630a7356/' icon='/images/icons/linkedin_color.svg' title='Lets Connect' description='On LinkedIn' />
                                <ConnectButton link='https://www.instagram.com/melorenz_/' icon='/images/icons/instagram_color.svg' title='Instagram' description='@melorenz_' />
                                <ConnectButton link='https://github.com/Melorenzz' icon='/images/icons/github_color.svg' title='Github' description='@melorenzz' />
                                <ConnectButton link='https://discord.gg/9nXRwysqVw' icon='/images/icons/discord.svg' title='Discord' description='@melorenz' />
                                <ConnectButton link='https://t.me/Melorenz' icon='/images/icons/telegram.svg' title='Telegram' description='@melorenz' />
                                
                            </div>
                        </div>
                    </div>
                    <Comments />
                </div>
            </div>

        </section>
    )
}