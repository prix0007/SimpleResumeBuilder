
export const isString = (word) => {
    console.log(word)
    return (word !== null && word.length > 0) ? true : false;
}

export const isValidString = (word) => {
    var letters = /^[A-Za-z ,.]+$/;
    return word.match(letters);
}
export const isValidNumber = (num) => {
    var regexp = /^[0-9\b]+$/;
    return num.matches(regexp);
}