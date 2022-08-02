const request = require('postman-request');

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=43323cfb000488d9ec526b048188dca6&query=' + latitude + ',' + longitude + '&units=f';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            console.log('Unable to find location');
        } else {
            callback(undefined, body.current.weather_descriptions[0] + 'It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degree out. The humidity is ' + body.current.humidity + '%.');
        }
    });
}

module.exports = forecast;