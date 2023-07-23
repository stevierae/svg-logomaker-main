
const Circle = require('./circle');

describe('Circle', () => {
    describe('color', () => {
        it('background color should be blue', () => {
            const circle = new Circle();
            circle.setColor("blue");
            expect(circle.backgroundColor).toEqual('blue');
        })
    })
    describe('render', () => {
        it('should return a string with the rendered shaped', () => {
            const circle = new Circle();
            circle.setColor("blue");
            expect(circle.render()).toEqual('<circle cx="150" cy="100" r="90" height="30" fill="blue" />');
        })
    })
})