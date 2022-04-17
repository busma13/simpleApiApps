
//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = Math.floor(Math.random() * (999 + 1));
  const url1 = 'https://the-one-api.dev/v2/quote/'
  const url2 = 'https://the-one-api.dev/v2/character/'
  const credentials = '###KEY###';

  fetch(url1, {
    headers: {
      "Authorization": `Bearer ${credentials}`
    }
  })
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data.docs[choice])
    const charId = data.docs[choice].character;
    document.querySelector('h3').innerText = data.docs[choice].dialog;
    fetch(url2, {
      headers: {
        "Authorization": `Bearer ${credentials}`
      }
    })
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.docs.find(e => e._id === charId))
      const charObj = data.docs.find(e => e._id === charId)
      document.querySelector('h2').innerText = charObj.name;
      
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
    
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}