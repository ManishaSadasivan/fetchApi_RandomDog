async function Search() {

    const response= await fetch("https://dog.ceo/api/breeds/list/all");
    const data= await response.json();
    console.log(data.message);
    createList(data.message)
   
    
}

Search();

function createList(data){
    document.getElementById("list").innerHTML=`
    <select onchange ="loadByValue(this.value)">
    <option >Choose a dog Breed</option>
       ${Object.keys(data).map(function (breed){  return `<option>${breed}</option>`
    
       }).join('')
    }
    </select>
    `
    }
    
    async function loadByValue(breed){
   if(breed!="Choose a dog Breed"){
    const response=await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data=await response.json();
    DisplayDog(data.message)
   }
        
    }
   
    function DisplayDog(image){

       document.getElementById("img").src=image[0];

    }