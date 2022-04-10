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

const getPokeMon = (pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then ((response)=>{
        return response.json();
    })
    .then ((response)=>{
        console.log(response)
        showInfo(response)
    })
}

const getData = () => {
    searchBtn.addEventListener('click',() =>{
        let pokemon = inputBox.value
        if(inputBox.value === "" || inputBox.value === null){
            console.log('no data')
            return
        } else if (inputBox.value) {
            getPokeMon(pokemon)
        }
    })
}
getData()

const showInfo = (response) => {
    pokeMonImg.src = response.sprites.front_default;
    pokeName.textContent = response.name;
    pokeType.textContent = response.types[0].type.name
    pokeHeight.textContent = response.height + "ft"
    pokeMove1.textContent = response.moves[0].move.name
    pokeMove2.textContent = response.moves[1].move.name
    pokeMove3.textContent = response.moves[2].move.name
    pokeMove4.textContent = response.moves[3].move.name
}