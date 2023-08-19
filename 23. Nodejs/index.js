import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    { message: "Type in your URL: ", name: "URL" }
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_png = qr.imageSync(url, { type: "png" }); // Specify the image type
    fs.writeFileSync("qr_img.png", qr_png); // Write the image data to the file
    fs.writeFile('URL.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
    console.log("QR code image generated successfully!");
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error);
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
      console.error(error);
    }
  });
 
// var svg_string = qr.imageSync('I love QR!', { type: 'svg' });

// import superheroes from "superheroes";
// var nameOfSuperhero = superheroes.random()
// console.log(`I am ${nameOfSuperhero}!`)

// import generateName from "sillyname"; 
// var generateName = require('sillyname');
// var sillyName = generateName();
// console.log(`My name is ${sillyName}.`)

// const fs = require("fs")

// fs.readFile('message.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }); 

// fs.writeFile("message.txt", "Hello from Node!!", (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   }); 

// console.log("Hello from Node!!")