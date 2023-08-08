/*********************** Path Module ***************************/

const path = require("path")

//console.log(path.sep) // => \(window), Linux|Mac => /

//console.log(process.env.Path) // => ;(window), Linux|Mac => :

//console.log(path.delimiter) // ; (in all os)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const filePath1 = 'public_html/home/index.html'

const currenFilePath = __filename
console.log(currenFilePath) // c:\Users\acer\Documents\PathModuleNodeJs\1. path\indeth)x.js

//console.log(__dirname) // c:\Users\acer\Documents\PathModuleNodeJs\1. path

// MOST USED METHODS OF PATH MODULE

let basename = path.basename(currenFilePath)
console.log('basename :', basename) // basename : index.js

let basenameWithoutExt = path.basename(currenFilePath, '.js')
console.log('basenameWithoutExt :' ,basenameWithoutExt) // basenameWithoutExt : index

let dirname = path.dirname(currenFilePath)
console.log('dirname :', dirname) // dirname : c:\Users\acer\Documents\PathModuleNodeJs\1. path

console.log("Extension1 :", path.extname(currenFilePath)) // Extension1 : .js
console.log("Extension2 :", path.extname('index.md.js')) // Extension2 : .js

let pathToFile = path.format({
    dir: 'public_html/home',
    base: 'index.html'
})

console.log('pathToFile :', pathToFile) // pathToFile : public_html/home\index.html

// Absolute Path => start with root(Window => C:/D:, Linux|Mac => /)
// Relative Path => start like ./, ../, direct filename

// CHECK THE PATH
console.log('IsAbsolute :', path.isAbsolute(currenFilePath)) // IsAbsolute : true
console.log('IsAbsolute :', path.isAbsolute('/index.js')) // IsAbsolute : true
console.log('IsAbsolute :', path.isAbsolute('./index.js')) // IsAbsolute : false
console.log('IsAbsolute :', path.isAbsolute('../index.js')) // IsAbsolute : false
console.log('IsAbsolute :', path.isAbsolute('index.js')) // IsAbsolute : false

let pathToDirectory = path.join('/home', 'js', 'dist', 'index.js')

console.log('PathToDirectory :', pathToDirectory) // PathToDirectory : \home\js\dist\index.js

console.log('Parse :', path.parse(currenFilePath))
/**
OUTPUT :
Parse : {
  root: 'c:\\',
  dir: 'c:\\Users\\acer\\Documents\\PathModuleNodeJs\\1. path',
  base: 'index.js',
  ext: '.js',
  name: 'index'
}
 */

console.log('Relative Path :', path.relative('/home/user/config', '/home/user/js')) // Relative Path : ..\js

console.log('Resolved :', path.resolve()) // Resolved : c:\Users\acer\Documents\PathModuleNodeJs

console.log('Normalized :', path.normalize('home//user//js')) // Normalized : home\user\js
