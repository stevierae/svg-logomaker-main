const Shapes = require('./shapes')
class Circle extends Shapes{
    constructor(textColor, backgroundColor){
        super(textColor, backgroundColor);
    }
    render(){
        return `<circle cx="150" cy="125" r="75" height="30" fill="${this.backgroundColor}" />`
    }
}

module.exports = Circle;