function returnDefaultMessageIfNoParam(message) {
    if (message) return message;

    return 'This is a default message!';
}

module.exports = { returnDefaultMessageIfNoParam };