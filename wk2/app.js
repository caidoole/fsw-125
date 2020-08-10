const express = require('express');
const app = express();

const users = [
    { name: 'john', age: 1000, eyes: 'yes' },
    { name: 'becky', age: 5, eyes: 'yes' },
    { name: 'kevin', age: 22, eyes: 'no' },
    { name: 'laura', age: 32, eyes: 'half' },
    { name: 'kay', age: 45, eyes: 'yes' },
]

const movies = [
    { title: 'The Losers', year: '2010', },
    { title: 'Benny and June', year: '1993', },
    { title: 'Death of a Salesman', year: '1985', },
    { title: 'October Sky', year: '1999', },
    { title: 'Pulp Fiction', year: '1994', },
    { title: 'Princess Bride', year: '1987' }
]

const cars = [
    { make: 'Ford', model: 'Mustang', year: '1964', },
    { make: 'Chevy', model: 'Impala', year: '1967', },
    { make: 'V-W', model: 'Beetle', year: '1960', },
    { make: 'Lincoln', model: 'Continental', year: '1969', },
    { make: 'Plymouth', model: 'Barracuda', year: '1967', },
    { make: 'Shelby', model: 'Cobra', year: '1962', }
]


app.get('/', (req, res) => {
    res.send(users)
})

app.get('/movies', (req, res) => {
    res.send(movies)
})

app.get('/cars', (req, res) => {
    res.send(cars)
})

app.listen(3001, () => { console.log('server') })