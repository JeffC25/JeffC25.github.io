import Navbar from "./components/Navbar.tsx"
import Home from "./components/Home.tsx"
import Projects from "./components/Projects.tsx"
import Contacts from "./components/Contacts.tsx"
import About from "./components/About.tsx"

function App() {

  return (
    <div className="w-full h-screen overflow-y-scroll snap-y scroll-smooth">
      <div className="fixed top-0 w-full shadow-md flex justify-center backdrop-blur-md bg-neutral-300/50 z-50">
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
