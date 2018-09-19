const argv = require('yargs').options({
  ubication: {
    alias: 'u',
    desc: 'Ubication',
    demand: true
  }
}).argv;

const { getPlaceCords, getWeather } = require('./place/place');

getPlaceCords(argv.ubication)
  .then(data => getWeather({ lat: data.lat, lon: data.lng }))
  .then(weather => console.log(weather))
  .catch(err => console.log(err));
