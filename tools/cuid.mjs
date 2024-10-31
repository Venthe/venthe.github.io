import { init } from '@paralleldrive/cuid2';

const length = 6;
console.debug(`Odds of a 50% chance of a collision are every ${Math.ceil(Math.sqrt(Math.pow(36, length - 1) * 26))} ids`)
const cuid = init({ length });

console.log(cuid())