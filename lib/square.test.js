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
            expect(square.render()).toEqual('<rect x="102" y="50" width="100" height="110" fill="blue" />');
        })
    })
})