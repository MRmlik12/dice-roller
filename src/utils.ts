import one from './assets/one.png';
import two from './assets/two.png';
import three from './assets/three.png';
import four from './assets/four.png';
import five from './assets/five.png';
import six from './assets/six.png';

function getRandomDiceNumber() {
  const number = Math.floor(Math.random() * 7);
  switch (number) {
    case 1:
      return one;
    case 2:
      return two;
    case 3:
      return three;
    case 4:
      return four;
    case 5:
      return five;
    case 6:
      return six;
    default:
      return one;
  }
}

export default getRandomDiceNumber;