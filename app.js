const pokeMonImg = document.querySelector('.pokemon')
const inputBox = document.querySelector('.input-box')
const searchBtn = document.querySelector('.search-btn')
const pokeName = document.querySelector('.pokemon-name')
const pokeType = document.querySelector('.pokemon-type')
const pokeHeight = document.querySelector('.pokemon-height')
const pokeMove1 = document.querySelector('.pokemon-move-1')
const pokeMove2 = document.querySelector('.pokemon-move-2')
const pokeMove3 = document.querySelector('.pokemon-move-3')
const pokeMove4 = document.querySelector('.pokemon-move-4')

//API Function
const getPokeMon = (pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then ((response)=>{
        return response.json();
    })
    .then ((response)=>{
        showInfo(response);
        capitalizeLetter();
    })
    .catch(()=>{
        pokeMonImg.src = "https://img.icons8.com/stickers/344/error-cloud.png";
        clearInfo();
    })
}

//grab API data if there is a word in the input box
const getData = () => {
    searchBtn.addEventListener('click',() =>{
        let pokemon = inputBox.value.toLowerCase();
        if(inputBox.value === "" || inputBox.value === null){
            return;
        } else if (inputBox.value) {
            getPokeMon(pokemon);
            pokeMonImg.style.visibility = "visible";
            inputBox.value = "";
        }
    })
}
getData();

//grab data then show it on display
const showInfo = (response) => {
    pokeMonImg.src = response.sprites.front_default;
    pokeName.textContent = response.name;
    pokeType.textContent = response.types[0].type.name;
    pokeHeight.textContent = response.height + "ft";    
    pokeMove1.textContent = response.moves[randomNumber()].move.name;
    pokeMove2.textContent = response.moves[randomNumber()].move.name;
    pokeMove3.textContent = response.moves[randomNumber()].move.name;
    pokeMove4.textContent = response.moves[randomNumber()].move.name;
};

const randomNumber = () => {
    let numb = Math.floor(Math.random()*25);
    return numb
};

//clear info if no search found
const clearInfo = () =>{
    pokeName.textContent = "";
    pokeType.textContent = "";
    pokeHeight.textContent = "";
    pokeMove1.textContent = "";
    pokeMove2.textContent = "";
    pokeMove3.textContent = "";
    pokeMove4.textContent = "";
};

const capitalizeLetter = () =>{
    //capitalizes name and type
    let capitalizedName = pokeName.textContent.charAt(0).toUpperCase();
    pokeName.textContent = capitalizedName + pokeName.textContent.slice(1);
    let capitalizedType = pokeType.textContent.charAt(0).toUpperCase();
    pokeType.textContent = capitalizedType + pokeType.textContent.slice(1);
    //capitalizes first word of each moves
    let capitalizedMove1 = pokeMove1.textContent.charAt(0).toUpperCase()
    pokeMove1.textContent = capitalizedMove1 + pokeMove1.textContent.slice(1);
    let capitalizedMove2 = pokeMove2.textContent.charAt(0).toUpperCase();
    pokeMove2.textContent = capitalizedMove2 + pokeMove2.textContent.slice(1);
    let capitalizedMove3 = pokeMove3.textContent.charAt(0).toUpperCase();
    pokeMove3.textContent = capitalizedMove3 + pokeMove3.textContent.slice(1);
    let capitalizedMove4 = pokeMove4.textContent.charAt(0).toUpperCase();
    pokeMove4.textContent = capitalizedMove4 + pokeMove4.textContent.slice(1);
};