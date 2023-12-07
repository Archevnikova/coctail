let coctail = document.querySelector(".random-coctail");
let templ = document.querySelector(".template-item");
//копировала
let runTest = async (letter) => {
    try {
        coctail.innerHTML = "";
        let resp = await fetch("www.thecocktaildb.com/api/json/v1/1/random.php" + letter);
        let json = await resp.json();
                
        for (let drink of json?.drinks) {
           generateCard(drink);
           console.log(drink);
        }
    } catch (e) {
        console.log(e);
    }
}

function inputLetter() {
    const letter = document.querySelector(".letter");
    runTest(letter.value);
}

const generateCard = (data) => {
    const newCard = cardTemplate.content.cloneNode(true);

    const card = newCard.querySelector(".card");
    const cardImg = newCard.querySelector(".card-img-top");
    const cardTitle = newCard.querySelector(".card-title");
    const instruction = newCard.querySelector(".instruction");
    
}