// console.log('JS FILE IS LINKED')

//----DOM EVENT LISTENER-----
// document.addEventListener('DOMContentLoaded', () => {
    
// })

//---GLOBAL VARIABLES-----
container = document.querySelector('.game-container')
resetBtn = document.querySelector('#reset')
let tile 
let currentPlayer = ''


//----H1 TITLE-----
const addH1 = () => {
    const h1 = document.createElement('h1')
    h1.innerText = 'Connect Four'
    document.querySelector('body').prepend(h1)
}


//------CREATE 42 BUTTONS FOR GAME-------
const createBtn = () => {
    for (let i = 0; i < 42; i++) {
        const btns = document.createElement('button')  
        btns.classList.add('tile')
        btns.id = 'num ' + [i]
        btns.innerText = ' '
        // btns.innerText = 'num' + i
        container.appendChild(btns) 
    }
    tile = document.querySelectorAll('.tile') //node list 
        //array.from creates array from node list 
    Array.from(tile).forEach(tileElement => {
    tileElement.addEventListener('click', (e) => {
        // currentPlayer = 0 then they are black. currentPlayer = 1 they are red
        if (currentPlayer === 0 && e.target.classList !== 'player-two') {
            //on click the class of tile will change to .player-one with background color of black
            e.target.classList.add('player-one')
            e.target.innerText = 1
            changePlayer()
        } else if (e.target.classList !== 'player-one') {
            //the class of tile will change to .player-two with background color of red
            e.target.classList.add('player-two') 
            e.target.innerText = 2
            changePlayer()
        }
        // console.log(e.target)
        const winArr = []
        for (let i = 0; i < tile.length; i++) {
            const color = tile[i].innerText
            winArr.push(color) 
        }
        console.log(winArr)
    })
})
}
//!---INVOKE FUNCTIONS SECTION-----
addH1()
createBtn()


// ----PLAYER 1 AND 2 FUNCTIONS-------
    
    //function that will handle alternating between the players 
    


changePlayer = () => { 
    // current player is 1, else player is 0 
    currentPlayer = currentPlayer === 0 ? 1 : 0
}

    //another function that will identify who player 1 and player 2 are and grab the CSS elements already set up (.player-one and .player-two)

    //another function that will not allow a tile to be clicked once it is clicked

    //writing a function that only allows tiles in the bottom row to be first and only allow other tiles to be clicked if the tile below is clicked(colored in)
        //if tile below is clicked, you can click the one on top of it
        //use classList to denote that a tile is taken when clicked on 
// for (let i = 0; i < tile.length; i++) {

// }




//-----CLICK EVENT LISTENERS-----
    //---RESET BUTTON----
        //something.grabs all the tiles then resets them back to orignal state or changes the background color to white
resetBtn.addEventListener('click', () => {
    const selector = document.querySelectorAll('.tile')
    selector.forEach(tile => {
        tile.style.backgroundColor = 'white'
    })
    // console.log('reset button console.logs')
})



//---WINNING CONDITIONS-----
    //KEEP AN ARRAY 







