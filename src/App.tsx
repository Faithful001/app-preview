import Ads from "./components/Ads/Ads"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Hero/Navbar"
import Integration from "./components/Integration/Integration"
import Marketing from "./components/Marketing/Marketing"
import Stories from "./components/Stories/Stories"
import Unleash from "./components/Unleash/Unleash"

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
        <Integration/>
        <Unleash/>
        <Ads/>
      </div>
    </>
  )
}

export default App
