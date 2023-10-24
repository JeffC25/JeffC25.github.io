import Navbar from "./components/Navbar.tsx"
import Home from "./components/Home.tsx"
import Projects from "./components/Projects.tsx"
import Contacts from "./components/Contacts.tsx"
import About from "./components/About.tsx"

function App() {

  return (
    <div className="w-full h-screen bg-blue-400 flex flex-col">
      <div className="flex-grow-0 h-20">
        {Navbar()}
      </div>
      <div className="overflow-y-scroll h-full snap-mandatory snap-y scroll-smooth">
        {Home()}
        {About()}
        {Projects()}
        {Contacts()}
      </div>
    </div>
  )
}

export default App
