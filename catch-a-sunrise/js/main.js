
const key = '###KEY###'
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const zip = document.querySelector('#zip').value
  const date = document.querySelector('#date').value
  const coordsUrl = `http://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=${key}`
  let lat = 0, lon = 0;

  fetch(coordsUrl)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        lat = data.lat
        lon = data.lon
        console.log(lat,lon)

        const sunriseUrl = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&date=${date}&formatted=0`

        console.log(sunriseUrl)

        fetch(sunriseUrl)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          const sunTime = new Date(Date.parse(data.results.sunrise));
          document.querySelector('h3').innerText = `Sunrise: ${sunTime}`
        })
        .catch(err => {
            console.log(`error ${err}`)
        });

      })
      .catch(err => {
          console.log(`error ${err}`)
      });

      
}