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
export async function Posthandler(url){
  
}