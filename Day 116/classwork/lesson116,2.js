export const name = "Alice";
export function greet() {
  return `Hello, ${name}!`;
}
export default function farewell() {
  return `Goodbye, ${name}!`;
}
import { greet, name } from './functions.js';
import farewell from './functions.js';

console.log(greet());
console.log(name);
console.log(farewell());