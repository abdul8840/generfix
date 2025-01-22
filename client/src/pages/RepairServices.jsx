import React from 'react'
import RSHero from '../components/RepairServices/RSHero'
import { repairServices } from '../assets/data/repairServices'
import RSCard from '../components/RepairServices/RSCard'

const RepairServices = () => {
  return (
    <div>
      <RSHero />
      <RSCard repairServices={repairServices} />
    </div>
  )
}

export default RepairServices
