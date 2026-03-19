import React from 'react'
import DonationHero from './components/DonationHero'
import DonationSection from './components/DonationSection'
import DonationForm from './components/DonationForm'
import DonationCTA from './components/DonationCTA'

const page = () => {
  return (
    <div>
      <DonationHero/>
      <DonationSection/>
      <DonationForm/>
      <DonationCTA/>
    </div>
  )
}

export default page
