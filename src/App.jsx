import Header from './components/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Showcase from './components/Showcase/Showcase'
import {useEffect} from "react";
import AOS from 'aos';
function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);
    const projects = [
        {image: null, title: 'Project title', description: 'Project description', anim: 'right'},
        {image: null, title: 'Project title', description: 'Project description', anim: 'down'},
        {image: null, title: 'Project title', description: 'Project description', anim: 'left'},
        {image: null, title: 'Project title', description: 'Project description', anim: 'right'},
        {image: null, title: 'Project title', description: 'Project description', anim: 'down'},
        {image: null, title: 'Project title', description: 'Project description', anim: 'left'},
    ]
    const certificates = [
        {image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', title: 'Certificate title', link: '', anim: 'right'},
        {image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', title: 'Certificate title', link: '', anim: 'down'},
        {image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', title: 'Certificate title', link: '', anim: 'left'},
        {image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', title: 'Certificate title', link: '', anim: 'right'},
        {image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', title: 'Certificate title', link: '', anim: 'down'},
        {image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', title: 'Certificate title', link: '', anim: 'left'},
        {image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', title: 'Certificate title', link: '', anim: 'right'},
        {image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', title: 'Certificate title', link: '', anim: 'down'},
        {image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', title: 'Certificate title', link: '', anim: 'left'},
        {image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', title: 'Certificate title', link: '', anim: 'right'},
    ]
  return (
    <>
      <Header />
        <main>
            <Home />
            <About projects={projects} certificates={certificates} />
            <Showcase projects={projects} certificates={certificates} />
        </main>
        <Footer />
    </>
  )
}

export default App
