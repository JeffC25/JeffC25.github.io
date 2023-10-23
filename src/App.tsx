import Navbar from "./components/Navbar"
import Page from "./components/Page"

function App() {

  return (
    <div className="w-full h-screen bg-blue-400 flex flex-col">
      <div className="flex-grow-0 h-20">
        <Navbar />
      </div>
      <div className="overflow-y-scroll h-full snap-mandatory snap-y ">
        <Page />
        <Page />
        <Page />
      </div>
    </div>
  )
}

export default App
