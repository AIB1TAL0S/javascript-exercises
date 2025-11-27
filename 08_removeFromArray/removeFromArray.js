const removeFromArray = function(...arraystorage) {
    const removefromarray = arraystorage.pop();
    const newarray = arraystorage.filter(item => item !== removefromarray);
    return newarray;
};

// Do not edit below this line
module.exports = removeFromArray;
