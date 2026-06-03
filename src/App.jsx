import { Suspense } from "react"
import NavBar from "./Components/NavBar/NavBar"
import PricingOptions from "./Components/Pricing-options/PricingOptions"
import ResultChart from "./Components/ResultChart/ResultChart";
import axios from "axios";
import MarksChart from "./Components/MarksChart/MarksChart";

// Initiates the fetch promise immediately on module load
const PricingPromise = fetch('/pricing-data.json').then(res => res.json());
const marksPromise=axios.get('MarksData.json');

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="container mx-auto p-6">
        {/* Suspense catches the promise unwrapping inside PricingOptions */}
        <Suspense fallback={
          <div className="flex justify-center my-10">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        }>
          <PricingOptions PricingPromise={PricingPromise} />
        </Suspense>
        <Suspense fallback={<span className="loading loading-spinner loading-lg text-primary"></span>}>
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>
        <ResultChart></ResultChart>

      </main>
    </>
  )
}

export default App;