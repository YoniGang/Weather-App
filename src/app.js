const path = require('path')
const express = require('express')

const app = express()

app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather app',
        name: 'Yoni Gang'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Yoni Gang'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        msg: 'This is help'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 14.93,
        location: 'Tel Aviv'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})