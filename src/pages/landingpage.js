import React from 'react'
import NavBar from '../layout/navbar'
import HeroSection from './landingpage/herosection'
import SmallDescription from './landingpage/smalldescription'
import BestProducts from './landingpage/bestproducts'
import TellMore from './landingpage/tellmore'
import Answers from './landingpage/answers'
import CalltoAction from './landingpage/calltoaction'
import Footer from '../layout/footer'

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <SmallDescription />
<BestProducts />
<TellMore />
<Answers />
<CalltoAction />
<Footer />
      </div>
  )
}

export default LandingPage
