const removeFromArray = function(inputArray, removalValue) {
    let resultArray = [];
    // [1, 2, 3, 4]
    for(let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === removalValue) {
        } else {
            resultArray.push(inputArray[i]);
        }
    }
    return resultArray;
};

// List out all array items one by one and check if they match the input argument
// If there's no match, keep looking until the end of the array's end
// If there's a match, remove that array value
// Keep looking for other match until the end of the array

// Do not edit below this line
module.exports = removeFromArray;
