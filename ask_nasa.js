function main(){
    console.log(Date.now());
const baseDiv = document.querySelector("#root");
let today = new Date().toISOString().slice(0, 10)
const baseUrl = "https://api.nasa.gov/planetary/apod?api_key=1Y2xps6PFrqfili1DbLJ26MQOXxHk3qiOZJvhCe9&date=";
const submit = document.querySelector("#submit")
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    const date= document.querySelector("#date").value;
    console.log(date);
    createPage(decideUrl(date));
    
})

function decideUrl(date){
    if(date===""){
        console.log(baseUrl)
        return baseUrl;
    }
    else{
        console.log(baseUrl+`&date=${date}`);
        return baseUrl+ date
    }
}

async function ApiRequest(baseUrl){
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
}

async function createPage(baseUrl){
    const data = await ApiRequest(baseUrl);
    console.log(data);
    const explanation = data.explanation ;
    const mediatype = data.media_type;
    const title= data.title;
    const hdurl = data.hdurl;
    let source;
    if(mediatype==="image"){
        source = `<img src="${hdurl}">`;
    }
    if(mediatype==="video"){
        source = `<iframe src=${data.url}>`
    }
    baseDiv.innerHTML=`<h1 style="text-align:center">${title}</h1><p>${explanation}</p><p>${source}</p>`


 }
createPage(baseUrl+today);

}

main();