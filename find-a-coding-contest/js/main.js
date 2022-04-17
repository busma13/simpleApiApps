//Example fetch using pokemonapi.co

fetch('https://kontests.net/api/v1/sites')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // console.log(data)
        data.forEach( e => {
          console.log(e[0])
          const li = document.createElement('li');
          li.innerText = e[0];
          document.querySelector('ul').appendChild(li);
        })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  
  const url = 'https://kontests.net/api/v1/all'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.filter( e => e.in_24_hours = "Yes"))
        data.forEach( e => {
          console.log(e.url)
          const li = document.createElement('li');
          li.innerHTML = `${e.name}: <a href="${e.url}">${e.url}</a>`;
          document.querySelector('#events').appendChild(li);
        })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}