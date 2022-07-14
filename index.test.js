
const { returnDefaultMessageIfNoParam } = require('./');

describe('Simple tests', () => {
    it('should return message passed as parameter', () => {
        const expectedMessage = 'This is a message for parameter';
        const message = returnDefaultMessageIfNoParam(expectedMessage);

        expect(message).toBe(expectedMessage);
    });

    it('should return default message if no parameter is provided', () => {
        const message = returnDefaultMessageIfNoParam();

        const expectedMessage = 'This is a default message!';
        expect(message).toBe(expectedMessage);
    });
});