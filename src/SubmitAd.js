import React, { useState } from 'react';

const SubmitAd = () => {
  const [adData, setAdData] = useState({
    model: '',
    year: '',
    mileage: '',
    price: '',
    phoneNumber: '',
    description: '',
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    const imageArray = [];
    for (let i = 0; i < files.length; i++) {
      const imageUrl = URL.createObjectURL(files[i]);
      imageArray.push(imageUrl);
    }
    setAdData((prevData) => ({
      ...prevData,
      images: imageArray,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', adData);
  };

  return (
    <div>
      <h1 class = "kotak">Страница подачи объявления</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Модель автомобиля:
          <input type="text" name="model" value={adData.model} onChange={handleInputChange} required />
        </label>

        <label>
          Год выпуска:
          <input type="number" name="year" value={adData.year} onChange={handleInputChange} required />
        </label>

        <label>
          Пробег:
          <input type="text" name="mileage" value={adData.mileage} onChange={handleInputChange} required />
        </label>

        <label>
          Цена:
          <input type="text" name="price" value={adData.price} onChange={handleInputChange} required />
        </label>

        <label>
          Номер телефона:
          <input type="tel" name="phoneNumber" value={adData.phoneNumber} onChange={handleInputChange} required />
        </label>

        <label>
          Описание:
          <textarea name="description" value={adData.description} onChange={handleInputChange} required />
        </label>

        <label>
          Фотографии автомобиля:
          <input type="file" name="images" accept="image/*" multiple onChange={handleImageChange} />
        </label>

        <button type="submit">Отправить объявление</button>
      </form>
    </div>
  );
};

export default SubmitAd;
