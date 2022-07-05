var btnTranslate = document.querySelector("#btntranslate");
var inputtext = document.querySelector("#input");
var outputtext = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/minion.json";

function clickHandler(){
    console.log("clicked");
    console.log("input",inputtext.value);
    var inputtext1 = inputtext.value;
  
    
    fetch(getTranslation(inputtext1))
    .then(response =>response.json())
    .then(json =>{
        var translatedtext = json.contents.translated;
         outputtext.innerText = translatedtext;
    })
    .catch(errorHandler)
};

function errorHandler(error){
    console.log("Error occured", error);
    alert("Try later- server down");
}


function getTranslation(text){
    return serverURL+"?"+"text="+text;
}
btntranslate.addEventListener("click",clickHandler)
