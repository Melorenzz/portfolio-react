import Header from './components/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Showcase from './components/Showcase/Showcase'

function App() {
    const projects = [
        {image: null, title: 'Project title', description: 'Project description'},
        {image: null, title: 'Project title', description: 'Project description'},
        {image: null, title: 'Project title', description: 'Project description'},
        {image: null, title: 'Project title', description: 'Project description'},
        {image: null, title: 'Project title', description: 'Project description'},
        {image: null, title: 'Project title', description: 'Project description'},
    ]
    const certificates = [
        {image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', title: 'Certificate title', link: ''},
        {image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', title: 'Certificate title', link: ''},
        {image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', title: 'Certificate title', link: ''},
        {image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', title: 'Certificate title', link: ''},
        {image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', title: 'Certificate title', link: ''},
        {image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', title: 'Certificate title', link: ''},
        {image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', title: 'Certificate title', link: ''},
        {image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', title: 'Certificate title', link: ''},
        {image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', title: 'Certificate title', link: ''},
        {image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', title: 'Certificate title', link: ''},
    ]
  return (
    <>
      <Header />
        <main>
            {/*<Home />*/}
            <About projects={projects} certificates={certificates} />
            <Showcase projects={projects} certificates={certificates} />
        </main>
        <Footer />
    </>
  )
}

export default App
