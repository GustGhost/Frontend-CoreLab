import styled from 'styled-components';

const colors = {
  red: '#FA2F21',
  blue: '#161CF0',
  white: '#FFFFFF',
  black: '#000000',
  silver: '#a9a9a9',
  green: '#21D60B',
  purple: '#C517F5',
  orange: '#F57404',
  pink: '#F516D3',
  yellow: '#F5EE02',
  other: 'linear-gradient(-45deg, #5e0878, #085078, #4ca59b, #1fa194)',
};

const getColors = (color) => {
  if (color.toLowerCase().includes('vermelh')) {
    return `background-color: ${colors.red}`;
  } else if (color.toLowerCase().includes('azul')) {
    return `background-color: ${colors.blue}`;
  } else if (color.toLowerCase().includes('branc')) {
    return `background-color: ${colors.white};
            color: #000000;`;
  } else if (color.toLowerCase().includes('pret')) {
    return `background-color: ${colors.black}`;
  } else if (color.toLowerCase().includes('prat')) {
    return `background-color: ${colors.silver}`;
  } else if (color.toLowerCase().includes('verde')) {
    return `background-color: ${colors.green}`;
  } else if (color.toLowerCase().includes('rox')) {
    return `background-color: ${colors.purple}`;
  } else if (color.toLowerCase().includes('laranja')) {
    return `background-color: ${colors.orange}`;
  } else if (color.toLowerCase().includes('rosa')) {
    return `background-color: ${colors.pink}`;
  } else if (color.toLowerCase().includes('amarel')) {
    return `background-color: ${colors.yellow}`;
  } else {
    return `background-color: ${colors.other}`;
  }
};

export const MainContainer = styled.div`
  height: 250px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  margin-top: 10px;
  padding-left: 10px;
  color: white;
  outline: black;
  font-size: 12px;

  ${({ color }) => getColors(color)}
`;
export const SecondaryContainer = styled.div`
  margin-bottom: 10px;
  @media only screen and (max-width: 880px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const TerciaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const X = styled.button`
  background-color: transparent;
  border: transparent;
  color: #ffffff;
  display: flex;
  justify-content: right;
  margin-right: -250px;
  font-size: 40px;
  align-self: center;

  :hover {
    background-color: #cdf1eb;
    transition: 0.5s ease-in-out;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchBar = styled.input`
  width: 50%;
  height: 2.8rem;
  background: #cdf1eb;
  outline: none;
  border: none;
  border-radius: 1.625rem;
  padding: 0 3.5rem 0 1.5rem;
  font-size: 1rem;
`;
