const getTheTitles = function(books) {
    let result = [];
    result = books.filter(book => book.title).map(book => book.title);
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
