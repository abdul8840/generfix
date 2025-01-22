import React from 'react'
import ISHero from '../components/ItServices/ISHero'
import ISCard from '../components/ItServices/ISCard'
import { itServices } from '../assets/data/itServices'

const ItServices = () => {
  return (
    <div>
      <ISHero />
      <ISCard itServices={itServices} />
    </div>
  )
}

export default ItServices
