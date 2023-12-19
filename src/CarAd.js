// CarAd.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css';


function CarAd({ ad }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % ad.images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + ad.images.length) % ad.images.length);
  };

  return (
    <div className="ad">
      <div className="ad-content">
        <div className="ad-info">
          <a href='https://toyota-almaty.kz/ru/buy-a-toyota/special-offers/offer/?offrId=5702'>
          <h2>{`Продажа автомобиля ${ad.model}`}</h2>
          </a>
          <p>{`Год выпуска: ${ad.year}`}</p>
          <p>{`Пробег: ${ad.mileage}`}</p>
          <p>{`Цена: ${ad.price}`}</p>
          <p>{`Номер телефона: ${ad.phoneNumber}`}</p>
        </div>
        <div className="ad-image">
          <div className="slider-container">
            {ad.images.map((image, index) => (
              <div key={index} className={`slider-slide ${index === currentSlide ? 'active' : ''}`}>
                <img src={image} alt={`Изображение ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="slider-buttons">
           
          </div>
        </div>
      </div>
      <div className="ad-details" style={{ display: 'none' }}>
        <p>{`Описание: ${ad.description}`}</p>
        <p>{`Контактная информация: Телефон: ${ad.phoneNumber}, Email: example@email.com`}</p>
      </div>
    </div>
  );
}

export default CarAd;
