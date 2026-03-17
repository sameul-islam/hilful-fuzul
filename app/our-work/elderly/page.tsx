import React from 'react'
import ElderlySupportHero from './components/ElderlySupportHero'
import ElderlyRealitySection from './components/ElderlyRealitySection'
import WhatWeDoElderly from './components/WhatWedoElderly'
import ElderlyPrograms from './components/ElderlyPrograms'
import ElderlyCTA from './components/ElderlyCTA'

const page = () => {
  return (
    <div>
      <ElderlySupportHero/>
      <ElderlyRealitySection/>
      <WhatWeDoElderly/>
      <ElderlyPrograms/>
      <ElderlyCTA/>
    </div>
  )
}

export default page
