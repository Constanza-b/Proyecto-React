const apiKey = "qmE48YQGRPjr559AjLX9A73AnH3iR960";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apiKey}`);

peticion
  .then((resp) => {
    console.log(resp)
  })

// peticion
//   .then((resp) => resp.json())
//   .then(( {data} ) => {
//     const { url } = data.images.original;

//     const img = document.createElement('img');
//     img.src = url;

//     document.body.append(img);
    
//   })
//   .catch(console.warn);
