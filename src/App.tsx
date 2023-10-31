import Navbar from "./components/Navbar.tsx"
import Home from "./pages/Home.tsx"
import Projects from "./pages/Projects.tsx"
import Contacts from "./pages/Contacts.tsx"
import About from "./pages/About.tsx"

function App() {

  return (
    <div className="w-full h-screen overflow-y-scroll snap-y scroll-smooth">
      <Navbar />
      <div className="h-screen">
        <Home />
        <About />
        <Projects />
        <Contacts />
      </div>
      {/* <img src={bg8} className="absolute top-0 object-cover h-full w-full -z-50" /> */}
    </div>
  )
}

export default App
