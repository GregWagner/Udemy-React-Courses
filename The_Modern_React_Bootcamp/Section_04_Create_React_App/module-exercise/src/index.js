import fruits from './foods';
import { choice, remove } from './helpers';

let fruit = choice(fruits);
console.log(`I'd like one ${fruit}, please.`);
console.log('Here you go: ', remove(fruits, fruit));
console.log('Delicious! May I have another?');
