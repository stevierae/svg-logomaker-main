const Shapes = require('./shapes')
class Triangle extends Shapes{
    constructor(textColor, backgroundColor){
        super(textColor, backgroundColor);
    }
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.backgroundColor}" />`
    }
}

module.exports = Triangle;