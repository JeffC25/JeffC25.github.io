import Navbar from "./components/Navbar.tsx"
import Home from "./pages/Home.tsx"
import Projects from "./pages/Projects.tsx"
import Contacts from "./pages/Contacts.tsx"
import About from "./pages/About.tsx"
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {

  return (
    <div className="w-full h-screen overflow-y-scroll snap-y scroll-smooth">
      <div className="fixed top-0 w-full flex justify-center p-2 z-50">
        <Navbar />
      </div>
      <div className="h-screen">
        <Home />
        <About />
        <Projects />
        <Contacts />
      </div>
    </div>
  )
}

export default App
