const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@cluster0.fewyp.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

if (process.argv[3] && process.argv[4]) {
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4]
  })

  person.save().then(() => {
    console.log('person saved!')
    mongoose.connection.close()
  })
} else {
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person)
    })

    mongoose.connection.close()
  })
}
