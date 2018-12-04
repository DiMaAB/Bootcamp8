import{sum,substr} from'./Math';
import pow from'./Math';
import h1 from './creataDom'
import'../sass/style.scss';

let body = document.querySelector('body');

console.log(sum(5,6));
console.log(substr(10,5));
console.log(pow(2,3));
body.append(h1);