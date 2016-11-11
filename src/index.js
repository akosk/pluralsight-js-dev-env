import './index.css';
import numeral from 'numeral';


const courseValue=numeral(1100).format('$0,0.00');
console.log(`I would pay ${courseValue} for this awesome course!`);


