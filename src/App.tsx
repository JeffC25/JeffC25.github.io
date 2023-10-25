import Navbar from "./components/Navbar.tsx"
import Home from "./components/Home.tsx"
import Projects from "./components/Projects.tsx"
import Contacts from "./components/Contacts.tsx"
import About from "./components/About.tsx"

function App() {

  return (
    <div className="w-full h-screen overflow-y-scroll snap-y scroll-smooth">
      <div className="absolute top-0 w-full h-20 shadow-md flex justify-center backdrop-blur-md ">
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
