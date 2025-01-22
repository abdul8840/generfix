import React from 'react';
import { useParams } from 'react-router-dom';
import ServiceHero from '../components/ServiceDetail/ServiceHero';
import ServiceAbout from '../components/ServiceDetail/ServiceAbout';
import ServiceCard from '../components/ServiceDetail/ServiceCard';
import ServiceContent from '../components/ServiceDetail/ServiceContent';
import ServiceWork from '../components/ServiceDetail/ServiceWork';

const ServicesDetail = ({ onlineServices }) => {
  const { id } = useParams();
  const onservices = onlineServices.find(p => p.id === parseInt(id));

  if (!onservices) {
    return <h2>Service Not Found</h2>;
  }

  return (
    <div>
      <ServiceHero onservices={onservices} />
      <ServiceAbout onservices={onservices} />
      <ServiceCard onservices={onservices} />
      <ServiceContent onservices={onservices} />
      <ServiceWork onservices={onservices} />
    </div>
  );
}

export default ServicesDetail;
