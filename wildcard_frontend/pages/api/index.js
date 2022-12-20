import gif from "../../public/notfound.jpg"

export async function results(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.results.map(result => {
      let img = null
      if (!!result.multimedia) {
        img = result.multimedia[0].url
      } else {
        img = result.media[0] ? result.media[0]["media-metadata"][0].url : gif
      }
      return {
        uri: result.uri,
        url: result.url, 
        title: result.title, 
        img
      }
    })
}
export async function handler(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data
}
<<<<<<< HEAD
export async function AllHandler(model){
  const response = await fetch(`http://127.0.0.1:8000/api/${model}`);
  const data = await response.json();
    return data
}


export async function Posthandler(model,body){
  e.preventDefault()
  const options ={
      method: "POST",
      body: JSON.stringify(
        body
      ),
      headers:{
          'Content-Type':'application/json'
      }
  }
  fetch(`http://127.0.0.1:8000/api/${model}`,options).
  then(res=>res.json()).then(response=>console.log(`response`,response)).catch(console.error())
} 
export async function PutHandler(model,id,body){
  const options ={
    method: "PUT",
    body: JSON.stringify(
      body
    ),
    headers:{
        'Content-Type':'application/json'
    }
    }
    fetch(`http://127.0.0.1:8000/api/${model}/${id}`,options).
    then(res=>res.json()).then(response=>console.log(`response`,response)).catch(console.error())
=======
export async function Posthandler(url){
  
>>>>>>> c87786d2070907e606f902197f4f0139f56616de
}