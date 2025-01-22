import React from "react";
import "../Services/Card.css";
import Image1 from '../../assets/images/banner2.jpg';
import Image2 from '../../assets/images/bannerimg1.jpg';
import Image3 from '../../assets/images/homec1.jpg';
import Image4 from '../../assets/images/homec2.jpg';

const AnimatedImageCard = () => {
  const cards = [
    {
      name: "Website designing",
      image: Image1,
      movies: ["Harry Potter", "Beauty and the Beast"],
    },
    {
      name: "Google analytics ",
      image: Image2,
      movies: ["Titanic", "The Wolf of Wall Street"],
    },
    {
      name: "Social media marketing",
      image: Image3,
      movies: ["Getaway", "Monte Carlo"],
    },
    {
      name: "Seo or AI seo or AGI",
      image: Image4,
      movies: ["Top Gun", "Mission Impossible"],
    },
    {
      name: "Content writing ",
      image: Image1,
      movies: ["Twilight", "Underwater"],
    },
  ];

  return (
    <div className="mt-7">
      <div className="Cardcontainer">
      <div className="container">
      <div className="card">
        {cards.map((card, index) => (
          <div
            key={index}
            className="image"
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <h3 className="rotate_name">{card.name}</h3>
            <div className="about">
              <h3 className="name">{card.name}</h3>
              <h2 className="mo">Movies</h2>
              <div className="movies">
                {card.movies.map((movie, i) => (
                  <p key={i}>{movie}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
    </div>
  );
};

export default AnimatedImageCard;

