import { useEffect, useState } from 'react';
import { getCars } from '../../API/Getters';
import { ModalComponent } from '../../Components/Modal/Modal';
import {
  Div,
  MainContainer,
  SearchBar,
  SecondaryContainer,
  TerciaryContainer,
  X,
} from './Styled';

export const HomePage = () => {
  const [carsData, setCarsData] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    getCars(setCarsData);
  }, []);

  const inputHandler = (e) => {
    const result = e.target.value;
    setValue(result);
  };

  const filteredData =
    carsData &&
    carsData.filter((car) => {
      if (value === '') {
        return car;
      } else if (car.name.toLowerCase().includes(value.toLowerCase())) {
        return car;
      }
      if (value === '') {
        return car;
      } else if (car.brand.toLowerCase().includes(value.toLowerCase())) {
        return car;
      }
      if (value === '') {
        return car;
      } else if (car.description.toLowerCase().includes(value.toLowerCase())) {
        return car;
      }
      if (value === '') {
        return car;
      } else if (car.max_price <= value) {
        return car;
      }
      if (value === '') {
        return car;
      } else if (car.year === Number(value)) {
        return car;
      }
    });

  const info =
    filteredData &&
    filteredData.map((car) => {
      return (
        <MainContainer key={car.id} color={car.color}>
          {/* <img src='../../Images/heart1.svg' alt='heart' /> */}
          <Div>
            <X>X</X>
            <p>
              {car.brand.toUpperCase()} {car.name.toUpperCase()}
            </p>
          </Div>
          <p>Preço: {car.max_price}</p>
          <p>Descrição: {car.description}</p>
          <p>Ano: {car.year}</p>
          <p>Cor: {car.color}</p>
        </MainContainer>
      );
    });

  return (
    <TerciaryContainer>
      <SearchBar type='text' onChange={inputHandler} placeholder='Buscar' />
      <SecondaryContainer>{info}</SecondaryContainer>
      <ModalComponent />
    </TerciaryContainer>
  );
};
