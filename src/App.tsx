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
    </div>
  )
}

export default App
