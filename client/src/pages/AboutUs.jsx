import React from 'react'
import AboutHero from '../components/About/AboutHero'
import Aboutus from '../components/About/Aboutus'
import AboutOfferCard from '../components/About/AboutOfferCard'
import AboutMission from '../components/About/AboutMission'
import AboutContent from '../components/About/AboutContent'
import HomeContent from '../components/HomeComponents/HomeContent'
import WhyChoose from '../components/About/WhyChoose'
import AboutWork from '../components/About/AboutWork'

const AboutUs = () => {
  return (
    <>
    <AboutHero />
    <WhyChoose />
    <AboutWork />
    <AboutOfferCard />
    <Aboutus />
    
    <AboutContent />
    <HomeContent />
    <AboutMission />
    </>
  )
}

export default AboutUs
