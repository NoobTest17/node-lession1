const fs = require('fs');
const path = require('path');

// // task-1 - читать файл
// // way 1
// fs.readFile('t1.txt', 'utf8', (err, data) => {
//   console.log(data)
// })
//
// const text = fs.readFileSync('t2.txt', 'utf8')
// console.log(text)
console.log('==================')

fs.readdir('./one', (err, data) => {
   data.forEach(file => {
     console.log(file + ' \t\t ' + path.extname(file) + '\t\t' + fs.statSync('one/'+file).size + 'B');
   })
})

fs.writeFile('one/newFile.txt', 'Good', (err) => {
  if (err) console.log(err);
});
