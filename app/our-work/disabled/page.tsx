import React from 'react'
import DisabilitySupportHero from './components/DisabilitySupportHero'
import DisabilityRealitySection from './components/DisabilityRealitySection'
import WhatWeDoDisability from './components/WhatWeDoDisability'
import DisabilityPrograms from './components/DisabilityPrograms'
import DisabilityCTA from './components/DisabilityCTA'

const page = () => {
  return (
    <div>
      <DisabilitySupportHero/>
      <DisabilityRealitySection/>
      <WhatWeDoDisability/>
      <DisabilityPrograms/>
      <DisabilityCTA/>
    </div>
  )
}

export default page
