const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/276281cff7912c342a0152986acd8b6a/'+ lat +','+ long + '?units=si'
    request({ url , json: true}, (err, { body }) => {
        if (err) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const { daily, currently } = body
            const { apparentTemperature, precipProbability } = currently
            const { data } = daily
            callback(undefined, data[0].summary + ' It is currently ' + apparentTemperature + ' degrees out. There is a ' + precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast