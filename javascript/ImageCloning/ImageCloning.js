'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding("ascii");
let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (chunk) {
    inputString += chunk;
});
process.stdin.on("end", function () {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
  return inputString[currentLine++];
}

class Size {
    width;
    height;
    
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    setWidth(value) {
        this.width = value;
    }
    
    getWidth() {
        return this.width;
    }
    
    setHeight(value) {
        this.height = value;
    }
    
    getHeight() {
        return this.height;
    }
}

class Image {
    url;
    size;
    
    constructor(url, size) {
        this.url = url;
        this.size = size;
    }
    
    getSize() {
        return this.size;
    }
    
    setSize(width, height) {
        this.size.setWidth(width);
        this.size.setHeight(height);
    }
    
    getUrl() {
        return this.url;
    }
    
    setUrl(url) {
        this.url = url;
    }
    
    cloneImage() {
        // return new Image(this.url, this.size);
        
        const original = this;
        return Object.assign(
            Object.create(
                Object.getPrototypeOf(original)
            ), original
        );
    }
}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    
    let images = [];
    
    let numberOfImages = parseInt(readLine().trim());
    
    while (numberOfImages-- > 0) {
        let inputs = readLine().trim().split(' ');
        images.push(new Image(inputs[0], new Size(parseInt(inputs[1]), parseInt(inputs[2]))));
    }

    let numberOfOperations = parseInt(readLine().trim());
    while (numberOfOperations-- > 0) {
        let inputs = readLine().trim().split(' ');
        const image = images[parseInt(inputs[1]) - 1];
        const operation = inputs[0];
        
        switch(operation) {
            case 'Clone':
                images.push(image.cloneImage());
                break;
            case 'UpdateUrl':
                image.setUrl(inputs[2]);
                break;
            case 'UpdateSize':
                image.setSize(parseInt(inputs[2]), parseInt(inputs[3]));
                break;
            default:
                break;
        }
    }
    
    images.forEach((img) => {
        const size = img.getSize();
        ws.write(`${img.getUrl()} ${size.width} ${size.height}\n`);
    })
}