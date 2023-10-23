import Navbar from "./components/Navbar"
import Page from "./components/Page"

function App() {

  return (
    <div className="w-full h-screen overflow-y-scroll snap-y">
      <Navbar />
      <Page />
      <Page />
      <Page />
      <Page />
    </div>
  )
}

export default App
