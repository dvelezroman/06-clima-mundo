const axios = require('axios');

const googleApiKey = 'AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI';
const weatherApiKey = '3c2da2eebaba505c53013c5e067cb09f';

const getPlaceCords = async(place) => {
  let ubication = encodeURI(place);
  const gapiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${ubication}&key=${googleApiKey}`;
  try {
    let res = await axios.get(gapiUrl);
    let data = {
      address: res.data.results[0].formatted_address,
      lat: res.data.results[0].geometry.location.lat,
      lng: res.data.results[0].geometry.location.lng,
    };
  return data;
  } catch (error) {
    return ('Error in typing place');
  }
}

// api.openweathermap.org/data/2.5/weather?lat=35&lon=139&units=metric&appid=3c2da2eebaba505c53013c5e067cb09f

const getWeather = async({ lat, lon }) => {
  let wapiURL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=3c2da2eebaba505c53013c5e067cb09f`;
  try {
    let res = await axios.get(wapiURL);
    let data = {
      main: res.data.main,
    }
    return (JSON.stringify(data, undefined, 2));
  } catch (error) {
    return ('No se pudo obtener clima para esta ciudad');
  }
}

module.exports = {
  getPlaceCords,
  getWeather,
}