
var x=fetch("https://dog.ceo/api/breeds/image/random").then(response=>{
    console.log(response);
    return response.json();
}).then(response=>{
    
   console.log(response);
   var src=response.message;
   document.getElementById("img").src=src;
})

