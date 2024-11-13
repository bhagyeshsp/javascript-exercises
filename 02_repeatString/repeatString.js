const repeatString = function(string, num) {
    let result = "";
    for(let i = 1; i <= num; i++) {
        result += string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
