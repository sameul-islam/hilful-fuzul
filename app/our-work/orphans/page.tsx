import React from 'react'
import OrphanSupportHero from './components/OrphanSupportHero'
import OrphanRealitySection from './components/OrphanRealitySection'
import WhatWeDoOrphans from './components/WhatWeDoOrphans'
import OrphanPrograms from './components/OrphanPrograms'
import OrphanCTA from './components/OrphanCTA'

const page = () => {
  return (
    <div>
      <OrphanSupportHero/>
      <OrphanRealitySection/>
      <WhatWeDoOrphans/>
      <OrphanPrograms/>
      <OrphanCTA/>
    </div>
  )
}

export default page
