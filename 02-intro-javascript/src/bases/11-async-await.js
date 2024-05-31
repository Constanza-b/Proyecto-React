// const getImagenPromesa = () => new Promise(resolve => resolve('https://fasdfjsdlkjfls.com'))
// getImagenPromesa().then(console.log);

const getImagen = async () => {

  try{
    const apiKey = "qmE48YQGRPjr559AjLX9A73AnH3iR960";
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apiKey}`);
    const {data} = await resp.json();
    
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);

  } catch (error){
// manejo del error
console.error(error)
  }
}
getImagen();

// const apiKey = "qmE48YQGRPjr559AjLX9A73AnH3iR960";

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apiKey}`);

// peticion
//   .then((resp) => resp.json())
//   .then(( {data} ) => {
//     const { url } = data.images.original;

//     const img = document.createElement('img');
//     img.src = url;

//     document.body.append(img);

//   })
//   .catch(console.warn);
