import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Com o nosso seguro, é pedalar e relaxar!</h1>
      <p>O Seguro Bike assegura a tranquilidade aos ciclistas, 
        garantindo que suas bicicletas estejam protegidas contra roubo, 
        danos acidentais e outras eventualidades imprevistas.
        Com nossa experiência e conhecimento no setor, estamos 
        comprometidos em fornecer soluções que atendam às necessidades 
        individuais de cada ciclista.
        </p>
      <h1>
      Porto Seguro Bike, são diversas coberturas para você <br /> só se preocupar em pedalar
      </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='Danos à bike'
              label='Cobertura'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Substração da bike'
              label='Cobertura'
              path='/products'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Acidentes Pessoais'
              label='Cobertura'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
