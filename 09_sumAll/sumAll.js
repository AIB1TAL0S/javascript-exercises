const sumAll = function(min, max) {
    if(!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if(min<0 || max<0) return "ERROR"
    if(min>max){
        const temp = min;
        min = max
        max = temp
    }
    let sum = 0;
<<<<<<< Updated upstream
    for(let i = min; i <= max; i++){
        sum += i;
    }
    return sum;
=======
    for(let i = min; i<=max; i++){
        sum += i
    }
    
    return sum
>>>>>>> Stashed changes
};

// Do not edit below this line
module.exports = sumAll;
