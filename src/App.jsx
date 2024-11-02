import './App.css'
// import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/Navbar/Navbar'
import PriceOptions from './Components/PriceOptions/PriceOptions'
import LineChart from './Components/LineChart/LineChart'
import BarChart from './Components/BarChart/BarChart'
import Phones from './Components/Phones/Phones'


function App() {

  return (
    <>
    <Navbar></Navbar>
    {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl bg-rose-600'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <BarChart></BarChart>
      <Phones></Phones>
    </>
  )
}

export default App
