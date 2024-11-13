const reverseString = function(text) {
    if (text.length === 0) return "";
    let reverseText = "";
    for(let i = text.length-1; i >= 0; i--) {
        reverseText += text.at(i);
    }
    return reverseText;
};

// Do not edit below this line
module.exports = reverseString;
