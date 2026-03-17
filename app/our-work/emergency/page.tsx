import React from 'react'
import EmergencyHero from './components/EmergencyHero'
import EmergencyRealitySection from './components/EmergencyRealitySection'
import EmergencyPrograms from './components/EmergencyPrograms'
import EmergencyImpactSection from './components/EmergencyImpactSection'
import EmergencyCTA from './components/EmergencyCTA'

const page = () => {
  return (
    <div>
      <EmergencyHero/>
      <EmergencyRealitySection/>
      <EmergencyPrograms/>
      <EmergencyImpactSection/>
      <EmergencyCTA/>
    </div>
  )
}

export default page
