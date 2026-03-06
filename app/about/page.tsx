import React from 'react'
import AboutHero from './components/AboutHero'
import MissionVision from './components/MissionVision'
import AboutIntroVideo from './components/AboutIntroVideo'
import IncomeExpense from './components/IncomeExpense'
import FAQSection from './components/FAQSection'
import AboutCTA from './components/AboutCTA'

const page = () => {
  return (
    <div>
      <AboutHero/>
      <AboutIntroVideo/>
      <MissionVision/>
      <IncomeExpense/>
      <FAQSection/>
      <AboutCTA/>
    </div>
  )
}

export default page
