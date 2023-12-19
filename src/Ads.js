// Ads.js

import React from 'react';
import CarAd from './CarAd';

function Ads() {
  const [carAds] = React.useState([
    {
      model: 'Toyota Camry',
      year: 2022,
      mileage: '30 km',
      price: '$20,000',
      phoneNumber: '+7 777 518 47 18',
      images: ['https://gabarit.ru/content/icons/272.png', ],
      description: 'Продаю отличный автомобиль Toyota Camry 2020 года выпуска...',
    },
    {
      model: 'BMW M5 F90',
      year: 2019,
      mileage: '25,000 km',
      price: '$80,000',
      phoneNumber: '+7 777 518 47 18',
      images: ['https://cars.bmw-rolf.ru/upload/resize_cache/iblock/090/700_600_1/090c54708be03780c7962c085f80a305.png',],
      description: 'Продаю надежный автомобиль BMW M5 F90 2019 года выпуска...',
    },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="h1adds">Объявления</h1>
      </header>
      <main>
        {carAds.map((ad, index) => (
          <CarAd key={index} ad={ad} />
        ))}
      </main>
      
    </div>
  );
}

export default Ads;
