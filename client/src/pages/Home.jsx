import React from 'react'
import HomeHero from '../components/Hero/HomeHero'
import HomeBanner from '../components/Banner/HomeBanner'
import HomeAboutCard from '../components/Cards/HomeAboutCard'
import HomeServices from '../components/Services/HomeServices'
import BlogCard from '../components/Cards/BlogCard'
import HomeContent from '../components/HomeComponents/HomeContent'
import WorkingProcess from '../components/HomeComponents/WorkingProcess'
import FAQ from '../components/HomeComponents/FAQ'
import MyCard from '../components/MyCard/MyCard'
import RepairBanner from '../components/HomeComponents/RepairBanner'

const Home = () => {
  return (
    <div>
      <HomeHero />
      <RepairBanner />
      <HomeBanner />
      <HomeAboutCard />
      <HomeServices />
      <BlogCard />
      <HomeContent />
      <MyCard />
      <WorkingProcess />
      
      <FAQ />
    </div>
  )
}

export default Home
