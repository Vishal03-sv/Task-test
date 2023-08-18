import React from 'react'
import Home from './sections/Home'
import Tutorials from './sections/Tutorials'
import Details from './sections/Details'
import Courses from './sections/Courses'
import QuAns from './sections/QuAns'
import Footer from './sections/Footer'
import Learn from './sections/Learn'
import Freetut from './sections/Freetut'
import Steps from './sections/Steps'
import Pricing from './sections/Pricing'

const App = () => {
  return (
    <div>
      <Home/>
      <Tutorials/>
      <Details/>
      <Courses/>
      <Steps/>
      <Pricing/>
      <Freetut/>
      <QuAns/>
      <Learn/>
      <Footer/>
    </div>
  )
}

export default App