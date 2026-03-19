import React from 'react'
import ZakatHero from './components/ZakatHero'
import ZakatInfo from './components/ZakatInfo'
import ZakatCalculator from './components/ZakatCalculator'
import ZakatCTA from './components/ZakatCTA'

const page = () => {
  return (
    <div>
      <ZakatHero/>
      <ZakatInfo/>
      <ZakatCalculator/>
      <ZakatCTA/>
    </div>
  )
}

export default page
