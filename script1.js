let exp = '';
const operators = /\+|\X|\/|\=/;
let str = '';
let arr = [];
let sum = 0;
let operatorCount = 0;

function makeArray(){
    arr = [];
    for(let i = 0; i < exp.length; i++){
        if(exp[i] == '-' && !isNaN(exp[i-1])){
            arr.push(str);
            arr.push(exp[i]);
            str = '';
        }
        else{
            if(!operators.test(exp[i])){
                str += exp[i];
            }
            else if(operators.test(exp[i])){
                arr.push(str);
                arr.push(exp[i]);
                str = '';
            }
        }
    }
    for(let i = 0; i < arr.length; i++){
        if(operators.test(arr[i])){
            operatorCount++;
        }
        if(!isNaN(arr[i])){
            arr[i] = Number(arr[i]);
        }
    }
}

function operate(array){
    if(operatorCount == 1){
        sum = array[0];  
    }
    else{
        for(let i = 0; i < array.length; i++){
            if(array[i] == "/"){
                sum = array[i-1] / array[i+1];
                array[i-1] = sum;
                array.splice(i,2);
                i = 0;
            }
        }
        for(let i = 0; i < array.length; i++){
            if(array[i] == "X"){
                sum = array[i-1] * array[i+1];
                array[i-1] = sum;
                array.splice(i,2);
                i = 0;
            }
        }
        for(let i = 0; i < array.length; i++){
            if(array[i] == "-"){
                sum = array[i-1] - array[i+1];
                array[i-1] = sum;
                array.splice(i,2);
                i = 0;
            }
        }
        for(let i = 0; i < array.length; i++){
            if(array[i] == "+"){
                sum = array[i-1] + array[i+1];
                array[i-1] = sum;
                array.splice(i,2);
                i = 0;
            }
        }
    }
}


// makeArray();
// console.log(arr);
// operate(arr);
// console.log(sum);