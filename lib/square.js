const Shapes = require('./shapes')
class Square extends Shapes{
    constructor(textColor, backgroundColor){
        super(textColor, backgroundColor);
    }
    render(){
        return `<rect x="100" y="65" width="100" height="100" fill="${this.backgroundColor}" />`
    }
}

module.exports = Square;