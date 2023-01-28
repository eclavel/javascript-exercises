const reverseString = function(str) {
    var reversed = '';
    let len = str.length - 1;
    for(let i = len; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
