// const colors = require('colors/safe');
const colors = require('colors');
 
console.log(colors.green('hello')); // outputs green text
console.log(colors.red.underline('i like cake and pies')) // outputs red underlined text
console.log(colors.inverse('inverse the color')); // inverses the color
console.log(colors.rainbow('OMG Rainbows!')); // rainbow
console.log(colors.trap('Run the trap')); // Drops the bass

console.log('Run the trap'.trap); // Drops the bass


var name = 'Marak';
console.log(colors.green('Hello %s'), name);
// outputs -> 'Hello Marak'