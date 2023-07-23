// Assign packages and module exports needed for this application to constant values
const inquirer = require('inquirer');
const generateSVG = require('./utils/generateLogo');
const fs = require('fs');
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');

// const Shape = require('./node/shapes')

let shape;
function renderShape(threeShapes, backgroundColor){
    console.log(threeShapes)
    if(threeShapes === 'triangle'){
        shape = new Triangle();
        shape.setColor(backgroundColor);
        return shape.render();
    }
    else if(threeShapes === 'circle'){
        shape = new Circle();
        shape.setColor(backgroundColor);
        shape.render();
    }
    else if(threeShapes === 'square'){
        shape = new Square();
        shape.setColor(backgroundColor);
        shape.render();
    }
}

const generateLogo = ({text, textColor, shape, backgroundColor}) =>
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${renderShape(shape, backgroundColor)}
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`

const questions = [
    {
        type: 'input',
        message: 'Enter a three character text',
        name: 'text',
        maxLength: 3
    },
    {
        type: 'input',
        message: 'Enter a color or hexadecimal for the text',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'Whay shape do you want?',
        name: 'shape',
        choices: [
            {
                name: 'triangle',
                value: 'triangle'
            },
            {
                name: 'circle',
                value: 'circle'
            },
            {
                name: 'square',
                value: 'square'
            }
        ]
    },
    {
        type: 'input',
        message: 'Enter a color or hexadecimal for the background of the shape',
        name: 'backgroundColor'
    }
];

function writeToFile(fileName, data){
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log('Generated logo.svg')
    );
}
function init(){
    inquirer
    .prompt(questions)
    .then((answers) => {
        const createLogo = generateLogo(answers)
        writeToFile('logo.svg', createLogo);
    })
}
init();

    // inquirer.prompt(questions).then(response ==> {
    //     console.log(response)
    //     if (response.shape === "circle") {
    //         const circle = new Circle(response.shape, response.text,
    //             response.textColor, response.shapeColor)
    //             fs.writeFileSynce("logo.svg", circle.render())
    //     }
    //     if (response.shape === "square"){
    //         const square = new Square(response.shape, response.text,
    //             response.textColor, response.shapeColor)
    //             fs.writeFileSync("logo.svg", square.render())
    //     }
    //     if (response.shape === "triangle"){
    //         const triangle = new Triangle(response.shape, response.text,
    //             response.textColor, r4esponse.shapeColor)
    //             fs.writeFileSync("logo.svg", traingle.render())
    //     }
    // })