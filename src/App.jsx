import Header from './components/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Showcase from './components/Showcase/Showcase'

function App() {

  return (
    <>
      <Header />
        <main>
            {/*<Home />*/}
            <About />
            <Showcase />
        </main>
        <Footer />
    </>
  )
}

export default App
