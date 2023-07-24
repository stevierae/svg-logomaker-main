const Square = require('./square');

describe('Square', () => {
    describe('color', () => {
        it('background color should be blue', () => {
            const square = new Square();
            square.setColor("blue");
            expect(square.backgroundColor).toEqual('blue');
        })
    })
    describe('render', () => {
        it('should return a string with the rendered shaped', () => {
            const square = new Square();
            square.setColor("blue");
            expect(square.render()).toEqual('<rect x="100" y="65" width="100" height="100" fill="blue" />');
        })
    })
})