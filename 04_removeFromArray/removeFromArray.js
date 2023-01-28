const removeFromArray = function() {
    let arr = arguments[0];
    len = arr.length;
    for(let i = 0; i < arguments.length; i++){
        for(let j = 0; j < len; j++){
            if(arguments[i] === arr[j]){
                arr.splice(j,1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
