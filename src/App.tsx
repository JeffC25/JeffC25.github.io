import Navbar from "./components/Navbar.tsx"
import Home from "./pages/Home.tsx"
import Projects from "./pages/Projects.tsx"
import Contacts from "./pages/Contacts.tsx"
import About from "./pages/About.tsx"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"

function App() {

  return (
    <div className="w-screen h-screen ">
      <div className="fixed top-0 w-full flex justify-center p-2 z-50">
        <Navbar />
      </div>
      {/* <div className="h-screen overflow-y-scroll snap-y scroll-smooth">
        <Home />
        <About />
        <Projects />
        <Contacts />
      </div> */}
      <Parallax pages={4} className="scroll-smooth">
        <ParallaxLayer offset={0} className="">
          <Home />
        </ParallaxLayer>
        <ParallaxLayer offset={1} className="">
          <About />
        </ParallaxLayer>
        <ParallaxLayer offset={2} className="">
          <Projects />
        </ParallaxLayer>
        <ParallaxLayer offset={3} className="">
          <Contacts />
        </ParallaxLayer>
      </Parallax>
      {/* <div className="w-screen h-screen absolute">
        <Parallax pages={4}>
          <ParallaxLayer
            offset={1}
            speed={5}
            factor={1}
            style={{
              backgroundImage: `${bg10}`,
              backgroundSize: 'cover',
            }} 
          >
            <img src={bg10} />
          </ParallaxLayer>
        </Parallax>
      </div> */}
    </div>
  )
}

export default App
