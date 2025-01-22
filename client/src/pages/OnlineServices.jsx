import React from 'react'
import OSHero from '../components/OnlineServices/OSHero'
import OSServiceCard from '../components/OnlineServices/OSServiceCard'
import { onlineServices } from '../assets/data/services'

const OnlineServices = () => {
  return (
    <div>
      <OSHero />
      <OSServiceCard onlineServices={onlineServices}/>
    </div>
  )
}

export default OnlineServices
