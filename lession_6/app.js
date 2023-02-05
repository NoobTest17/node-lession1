const fs = require('fs');
const path = require('path');
const student = require('./one.json');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// fs.writeFile('one.txt', 'work', (err) =>{
//   if (err) console.log(err)
// })

// case 1  write JSON file
const man = {
  name: 'Max',
  age: 19,
  job: 'No',
  car: 'nissan'
}

// fs.writeFile('one.json', JSON.stringify(man), (err) => {
//   if (err) console.log(err)
// });

// case 2 read JSON file
// console.log(student);

// case 3 read CSV file
// const result = [];
// fs.createReadStream('table.csv')
// .pipe(csv())
// .on('data', (data) => result.push(data))
// .on('end', () => {
//   console.log(result)
// })

// case 4 write CSV file
const data = [
  {
    name: 'Max',
    surname: 'Mig',
    age: 19,
    gender: 'M'
  },
  {
    name: 'Max',
    surname: 'Mig',
    age: 19,
    gender: 'M'
  },
  {
    name: 'Max',
    surname: 'Mig',
    age: 19,
    gender: 'M'
  },
  {
    name: 'Max',
    surname: 'Mig',
    age: 19,
    gender: 'M'
  },
]
const csvWriter = createCsvWriter({
  path: 'test.csv',
  header: [
    {id: 'name', title: 'NAME'},
    {id: 'surname', title: 'LastName'},
    {id: 'age', title: 'AGE'},
    {id: 'gender', title: 'G'}
  ]
})

csvWriter.writeRecords(data)
  .then(() => {
    console.log('...Done');
  })

