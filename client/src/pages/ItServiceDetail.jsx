import React from 'react'
import { useParams } from 'react-router-dom';
import ItHero from '../components/ServiceDetail/ItSetviceDetail/ItHero';
import ItAbout from '../components/ServiceDetail/ItSetviceDetail/ItAbout';
import ItCard from '../components/ServiceDetail/ItSetviceDetail/ItCard';
import ItContent from '../components/ServiceDetail/ItSetviceDetail/ItContent';
import ItWork from '../components/ServiceDetail/ItSetviceDetail/ItWork';

const ItServiceDetail = ({itServices}) => {
  const { id } = useParams();
  const itsolServices = itServices.find(p => p.id === parseInt(id));

  if (!itsolServices) {
    return <h2>Service is Not Found</h2>;
  }
  return (
    <div>
      <ItHero itsolServices={itsolServices} />
      <ItAbout itsolServices={itsolServices} />
      <ItCard itsolServices={itsolServices} />
      <ItContent itsolServices={itsolServices} />
      <ItWork itsolServices={itsolServices} />
    </div>
  )
}

export default ItServiceDetail
