let coctail = document.querySelector(".random-coctail");
let templ = document.querySelector(".template-item");

//
async function  getCoctail(){
    let resp = await fetch("http://www.thecocktaildb.com/api/json/v1/1/random.php" ,{ mode:"no-cors"});
  //  let json = await resp.json();
    console.log(resp);
}
let runTest = async () => {
    try {
        coctail.innerHTML = "";
       
                console.log(json);
        for (let drink of json?.drinks) {
           generateCard(drink);
           console.log(drink);
        }
    } catch (e) {
        console.log(e);
    }
}


const generateCard = (data) => {
    const newCard = templ.content.cloneNode(true);

    const card = newCard.querySelector(".card");
    const cardImg = newCard.querySelector(".card-img-top");
    const cardTitle = newCard.querySelector(".card-title");
    const instruction = newCard.querySelector(".instruction");
    
}
document.addEventListener("DOMContentLoaded", getCoctail); 