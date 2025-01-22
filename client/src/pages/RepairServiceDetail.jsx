import React from 'react'
import { useParams } from 'react-router-dom';
import RepairHero from '../components/ServiceDetail/RepairServiceDetail/RepairHero';
import RepairAbout from '../components/ServiceDetail/RepairServiceDetail/RepairAbout';
import RepairCard from '../components/ServiceDetail/RepairServiceDetail/RepairCard';
import RepairContent from '../components/ServiceDetail/RepairServiceDetail/RepairContent';
import RepairWork from '../components/ServiceDetail/RepairServiceDetail/RepairWork';

const RepairServiceDetail = ({repairServices}) => {
  const { id } = useParams();
  const repServices = repairServices.find(p => p.id === parseInt(id));

  if (!repServices) {
    return <h2>Service is Not Found</h2>;
  }

  return (
    <div>
      <RepairHero repServices={repServices} />
      <RepairAbout repServices={repServices} />
      <RepairCard repServices={repServices} />
      <RepairContent repServices={repServices} />
      <RepairWork repServices={repServices} />
    </div>
  )
}

export default RepairServiceDetail
