const palindromes = function (originalWord) {
    originalWord = originalWord.toLowerCase().replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,"");
    originalWord = originalWord.replace(/\s{1,}/g,"");
    let mirrorWord = "";
    let isPalindrome = "";
    for(let i = originalWord.length-1; i >= 0; i--) { 
        mirrorWord += originalWord.charAt(i);
    }
    isPalindrome = (mirrorWord === originalWord);
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
// console.log(palindromes("Animal loots foliated detail of stool lamina."));
