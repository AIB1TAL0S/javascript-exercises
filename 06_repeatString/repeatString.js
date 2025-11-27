const repeatString = function(word, times) {
    if (times < 0) return "ERROR";
<<<<<<< Updated upstream
    let string = "";
    for(let i =0; i<times; i++){
=======
    let string ="";
    for(let i = 0; i<times; i++){
>>>>>>> Stashed changes
        string += word;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
