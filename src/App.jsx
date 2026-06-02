import { Suspense } from "react"
import DaisyNav from "./Components/DaisyNav/DaisyNav"
import NavBar from "./Components/NavBar/NavBar"
import PricingOptions from "./Components/Pricing-options/PricingOptions"

const PricingPromise=fetch('pricing-data.json')
  .then(res=>res.json())

function App() {

  return (
    <>
      <header>
        {/* <DaisyNav></DaisyNav> */}
        <NavBar></NavBar>
      </header>
      <main>
        <Suspense fallback={
          <span className="loading loading-spinner text-primary"></span>
        }>
          <PricingOptions PricingPromise={PricingPromise}></PricingOptions>
        </Suspense>
      </main>
    </>
  )
}

export default App
