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

export async function AllHandler(model){
  const response = await fetch(`http://127.0.0.1:8000/api/${model}`);
  const data = await response.json();
  return data
}
export async function OneHandler(model,id){
  const response = await fetch(`http://127.0.0.1:8000/api/${model}/${id}`);
  const data = await response.json();
  return data
}

export async function Posthandler(model,body){
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
  }
export async function DeleteHandler(model,id){
  
    const options ={
      method: 'DELETE'
      }
     if (id != null){
      fetch(`http://127.0.0.1:8000/api/${model}/${id}`,options)
      then(response=>console.log(`response`,response)).catch(console.error())
      return
    }
    fetch(`http://127.0.0.1:8000/api/${model}`,options)
    then(response=>console.log(`response`,response)).catch(console.error())
  }
