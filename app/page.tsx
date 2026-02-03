"use client"

import Hero from '@/components/body/Hero'
import ImpactSection from '@/components/body/ImpactSection'
import ImpactVideos from '@/components/body/ImpactVideos'
import TrustSection from '@/components/body/TrustSection'
import WhatWeDo from '@/components/body/WhatWeDo'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <TrustSection/>
      <WhatWeDo/>
      <ImpactSection/>
      <ImpactVideos/>
    </div>
  )
}

export default page
