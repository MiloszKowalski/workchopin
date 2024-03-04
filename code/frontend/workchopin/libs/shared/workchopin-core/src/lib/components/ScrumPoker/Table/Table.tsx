import Card from '../Card/Card';
import CoffeeCard from '../assets/cards/ecom/coffee.png';
import ZeroCard from '../assets/cards/ecom/0.png';
import HalfCard from '../assets/cards/ecom/half.png';
import OneCard from '../assets/cards/ecom/1.png';
import TwoCard from '../assets/cards/ecom/2.png';
import ThreeCard from '../assets/cards/ecom/3.png';
import FiveCard from '../assets/cards/ecom/5.png';
import EightCard from '../assets/cards/ecom/8.png';
import ThirteenCard from '../assets/cards/ecom/13.png';
import TwentyCard from '../assets/cards/ecom/20.png';
import FourtyCard from '../assets/cards/ecom/40.png';
import OneHundredCard from '../assets/cards/ecom/100.png';

const cards = new Map<string, string>([
  ['coffee', CoffeeCard],
  ['0', ZeroCard],
  ['half', HalfCard],
  ['1', OneCard],
  ['2', TwoCard],
  ['3', ThreeCard],
  ['5', FiveCard],
  ['8', EightCard],
  ['13', ThirteenCard],
  ['20', TwentyCard],
  ['40', FourtyCard],
  ['100', OneHundredCard],
]);

export function Table() {
  return Array.from(cards.entries()).map(([value, image]) => (
    <Card value={value} imageSrc={image} />
  ));
}

export default Table;
