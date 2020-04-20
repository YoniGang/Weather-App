const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoieW9uaWdhbmciLCJhIjoiY2s4dmpjcTAwMDBzcDNtcW91MW1obTNkciJ9.9eSaHliesDW-Nm_81N03hg&limit=1'
    request({ url, json: true}, (err, { body }) => {
        const { features } = body
        if (err) {
            callback('Unable to connect geolocation service!', undefined)
        } else if (features == undefined || features.length < 1) {
            callback('Unable to find location. Try another search.', undefined)
        } else  {
            const { center, place_name: location } = features[0]
            callback(undefined, {
                latitude: center[1], 
                longitude: center[0], 
                location})
        }
    })
}

module.exports = geocode