import * as flag from '../assets';
export const countries = [
  {
    name: 'Brazil',
    flafUrl: flag.brazil,
  },
  {
    name: 'Switzerland',
    flafUrl: flag.switzerland,
  },
  {
    name: 'Cameroon',
    flafUrl: flag.cameroon,
  },
  {
    name: 'Serbia',
    flafUrl: flag.serbia,
  },
];

export const mapCountryAndFlag = (countryName) => {
  const res = countries.find((c) => c.name === countryName);
  return res ? res.flafUrl : '';
};
