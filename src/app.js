const path = require('path')
const express = require('express')
const hbs =  require('hbs')

const app = express()

// Define path for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engone and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
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
        helpText: 'This is help',
        title: 'Help',
        name: 'Yoni Gang'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 14.93,
        location: 'Tel Aviv'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        errorMsg: 'Help article not found',
        title: '404 Page',
        name: 'Yoni Gang'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        errorMsg: 'Page not found',
        title: '404 Page',
        name: 'Yoni Gang'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})