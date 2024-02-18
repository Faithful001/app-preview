import Hero from "./components/Hero/Hero"
import Navbar from "./components/Hero/Navbar"
import Marketing from "./components/Marketing/Marketing"
import Stories from "./components/Stories/Stories"

function App() {

  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div>
        <Hero/>
        <Stories/>
        <Marketing/>
      </div>
    </>
  )
}

export default App
