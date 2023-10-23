import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Contacts from "./components/Contacts"
import About from "./components/About"

function App() {

  return (
    <div className="w-full h-screen bg-blue-400 flex flex-col">
      <div className="flex-grow-0 h-20">
        <Navbar />
      </div>
      <div className="overflow-y-scroll h-full snap-mandatory snap-y scroll-smooth">
        <Home />
        <About />
        <Projects />
        <Contacts />
      </div>
    </div>
  )
}

export default App
