import React from 'react'
import GalleryHero from './components/GalleryHero'
import GalleryGrid from './components/GalleryGrid'
import GalleryCTA from './components/GalleryCTA'

const page = () => {
  return (
    <div>
      <GalleryHero/>
      <GalleryGrid/>
      <GalleryCTA/>
    </div>
  )
}

export default page
