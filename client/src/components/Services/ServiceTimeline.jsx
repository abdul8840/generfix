import React from 'react'
import { Link } from 'react-router-dom';
import { itServices } from '../../assets/data/itServices';

const ServiceTimeline = () => {
  return (
    <div className="mt-7">
      <div className="Cardcontainer">
        <div className="container">
          <div className="card">
            {itServices.slice(0, 6).map((card, index) => (
              <Link to={`/it-services/${card.id}`}>
                <div
                  key={index}
                  className="image"
                  style={{ backgroundImage: `url(${card.contImg})` }}
                >
                  <h3 className="rotate_name">{card.name}</h3>
                  <div className="about">
                    <h3 className="name">{card.name}</h3>
                    <h2 className="mo">About {card.name}</h2>
                    <div className="movies">
                      {card.shortDescription}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <Link to='/it-solutions'>
              <button className=" bg-green300 text-white hover:!bg-white hover:text-black border-2 border-solid border-green300 rounded-md mt-10 py-2 px-8 transition-all">See all services</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceTimeline
