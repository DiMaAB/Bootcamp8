function sum(...args){
   return args.reduce((acc,el)=>acc+el,);
}
function substr(...args){
    return args.reduce((acc,el)=>acc-el);
    }

function pow(a,b){
    return Math.pow(a,b);
}

    export{sum,substr};
    export default pow; // можем пи импорте без фигурных скобок