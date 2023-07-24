class Shapes {
    constructor (textColor, backgroundColor){
        this.textColor = textColor;
        this.backgroundColor = backgroundColor;
    }
    setColor (newColor){
        this.backgroundColor = newColor;
    }
    setTextColor (textColor){
        this.textColor = textColor;
    }
}

module.exports = Shapes;