function main(){

const baseDiv = document.querySelector("#root");
const inputDate = document.querySelector("#date");
let today = new Date().toISOString().slice(0, 10);
inputDate.value = today;
inputDate.max = today;
const baseUrl = "https://api.nasa.gov/planetary/apod?api_key=1Y2xps6PFrqfili1DbLJ26MQOXxHk3qiOZJvhCe9&date=";
inputDate.addEventListener("change",(e)=>{
    e.preventDefault();
    const date= inputDate.value;
    createPage(baseUrl+date);
})

async function ApiRequest(baseUrl){
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
}

function decideBetweenPictureAndVideo(data){

    if(data.media_type==="image"){
       return  `<img src="${data.hdurl}">`;
    }
    if(data.media_type==="video"){
        return `<iframe style="width:750px height:auto" src=${data.url}>`
    }
}

async function createPage(baseUrl){
    const data = await ApiRequest(baseUrl);
    let source= decideBetweenPictureAndVideo(data);
    const explanation = data.explanation ;
    const title= data.title;
    baseDiv.innerHTML=`<h1 style="text-align:center">${title}</h1><p>${explanation}</p><p>${source}</p>`
}

createPage(baseUrl+today);
}

main();