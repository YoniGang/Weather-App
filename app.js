const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const city = process.argv[2]
if (city) {
    geocode(city, (err, { latitude, longitude, location }) => {
        if (err) {
            console.log(err)
            return
        }
        
        forecast(latitude, longitude,(err, forcastData) => {
            if (err) {
                console.log(err)
                return
            }
            console.log(location)
            console.log(forcastData)
            })
    })
} else {
    console.log('No city provided!')
}