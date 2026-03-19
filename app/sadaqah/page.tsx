import React from 'react'
import SadakaHero from './components/SadakaHero'
import SadakaHadith from './components/SadakaHadith'
import SadakaCTA from './components/SadakaCTA'

const page = () => {
  return (
    <div>
      <SadakaHero/>
      <SadakaHadith/>
      <SadakaCTA/>
    </div>
  )
}

export default page
