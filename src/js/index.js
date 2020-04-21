import nepalify from './nepalify';
import { romanized } from './nepalify/layouts';

let text = "kiMkr/tv/ybimuX/"
let ftext = nepalify.format(text);
let fftext = nepalify.format(text, {layout: romanized})

console.log(text);
console.log(ftext);
console.log(fftext);
