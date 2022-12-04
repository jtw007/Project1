// console.log('JS FILE IS LINKED')

//---GLOBAL VARIABLES-----
container = document.querySelector('.game-container')
resetBtn = document.querySelector('#reset')
display = document.querySelector('#display')
let tile 
let currentPlayer = 0
let playerOne = []
let playerTwo = []
const winArr = [
//west to east (24)
    //Row 1
    [1,2,3,4],
    [2,3,4,5],
    [3,4,5,6],
    [4,5,6,7],
    //Row 2
    [8,9,10,11],
    [9,10,11,12],
    [10,11,12,13],
    [11,12,13,14],
    //Row 3
    [15,16,17,18],
    [16,17,18,19],
    [17,18,19,20],
    [18,19,20,21],
    //Row 4
    [22,23,24,25],
    [23,24,25,26],
    [24,25,26,27],
    [25,26,27,28],
    //Row 5
    [29,30,31,32],
    [30,31,32,33],
    [31,32,33,34],
    [32,33,34,35],
    //Row 6
    [36,37,38,39],
    [37,38,39,40],
    [38,39,40,41],
    [39,40,41,42],

//north to south
    //Column 1
    [1,8,15,22],
    [8,15,22,29],
    [15,22,29,36],
    //Column 2
    [2,9,16,23],
    [9,16,23,30],
    [16,23,30,37],
    //Column 3
    [3,10,17,24],
    [10,17,24,31],
    [17,24,31,38],
    //Column 4
    [4,11,18,25],
    [11,18,25,32],
    [18,25,32,39],
    //Column 5
    [5,12,19,26],
    [12,19,26,33],
    [19,26,33,40],
    //Column 6
    [6,13,20,27],
    [13,20,27,34],
    [20,27,34,41],
    //Column 7
    [7,14,21,28],
    [14,21,28,35],
    [21,28,35,42],
//diagonal: west to south
    [15,23,31,39],
    [8,16,24,32],
    [16,24,32,40],

    [1,9,17,25],
    [9,17,25,33],
    [17,25,33,41],

    [2,10,18,26],
    [10,18,26,34],
    [18,26,34,42],

    [3,11,19,27],
    [11,19,27,35],
    [4,12,20,28],
//diagonal: east to south
    [21,27,33,39],
    [14,20,26,32],
    [20,26,32,38],

    [7,13,19,25],
    [13,19,25,31],
    [19,25,31,37],

    [6,12,18,24],
    [12,18,24,30],
    [18,24,30,36],

    [5,11,17,23],
    [11,17,23,29],
    [4,10,16,22]
]
console.log(playerOne)
//----H1 TITLE-----
const addH1 = () => {
    const h1 = document.createElement('h1')
    h1.innerText = 'Connect Four'
    document.querySelector('body').prepend(h1)
}
//---Change player funtion----
changePlayer = () => { 
    // current player is 1, else player is 0 
    currentPlayer = currentPlayer === 0 ? 1 : 0
}

//------CREATE 42 BUTTONS FOR GAME-------
const createBtn = () => {
    for (let i = 0; i < 42; i++) {
        const btns = document.createElement('button')  
        btns.classList.add('tile')
        btns.id = i+1
        btns.innerText = ' '
        // btns.innerText = i+1
        container.appendChild(btns) 
    }
    tile = document.querySelectorAll('.tile') //node list 

        //array.from creates array from node list 
    Array.from(tile).forEach(tileElement => {
        tileElement.addEventListener('click', (e) => {
            // ----PLAYER 1 AND 2 FUNCTIONS-------
            // currentPlayer = 0 then they are black, currentPlayer = 1 they are red
            if (currentPlayer === 0 && e.target.classList !== 'player-two') {
                //on click the class of tile will change to .player-one with background color of black
                e.target.classList.add('player-one')
                e.target.disabled = true
                e.target.innerText = 1
                playerOne.push(Number(e.target.id))
                console.log(playerOne)
                changePlayer()
            } else if (e.target.classList !== 'player-one') {
                //the class of tile will change to .player-two with background color of red
                e.target.classList.add('player-two') 
                e.target.disabled = true
                e.target.innerText = 2
                playerTwo.push(Number(e.target.id))
                console.log(playerTwo)
                changePlayer()
            }
            //console.log(Number(e.target.id))
        })
    })
}

//---WINNING CONDITIONS-----
function winFunction () {
    //inside the winArr, for each value of i
    winArr.forEach((i) => {
        //if 
        if (i.every((j)=> playerOne.includes(j))) {
            display.innerText = 'Black Player wins'
        } else if (i.every((j)=> playerOne.includes(j))) {
            display.innerText = 'Red Player wins'
        } else if (winArr === 42) {
            display.innerText = 'Tie Game'
        }
    })
}


//writing a function that only allows tiles in the bottom row to be first and only allow other tiles to be clicked if the tile below is clicked(colored in)
    //only if tile below is clicked/colored in, you can click the one on top of it

//---RESET BUTTON----
resetBtn.addEventListener('click', () => {
    const selector = document.querySelectorAll('.tile')
    selector.forEach(tile => {
        tile.classList.remove('player-one', 'player-two')
        // tile.style.backgroundColor = 'white'
        tile.innerText = '' 
        tile.disabled = false 
    })
    // console.log('reset button console.logs')   
})



//!---INVOKE FUNCTIONS SECTION-----
addH1()
createBtn()
winFunction()





