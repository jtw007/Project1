console.log('JS FILE IS LINKED')
//----DOM EVENT LISTENER-----
document.addEventListener('DOMContentLoaded', () => {
    addH1()
    createBtn()
})


//---GLOBAL VARIABLES-----
container = document.querySelector('.game-container')
resetBtn = document.querySelector('#reset')
let tile 


//----H1 TITLE-----
const addH1 = () => {
    const h1 = document.createElement('h1')
    h1.innerText = 'Connect Four'
    document.querySelector('body').prepend(h1)
}


//----CREATE 42 BUTTONS FOR GAME-------
//how to assign btns the element of ID and increment? 
const createBtn = () => {
    for (let i = 0; i < 42; i++) {
        const btns = document.createElement('button')  
        btns.classList.add('tile')
        btns.id = i+1
        container.appendChild(btns) 
    }
    tile = document.querySelectorAll('.tile') //node list 
        //array.from creates array from node list 
    Array.from(tile).forEach(tileElement => {
    tileElement.addEventListener('click', (e) => {
    console.log(e.target)  
    })
})

}


//-----CLICK EVENT LISTENERS-----


    //---RESET BUTTON----
resetBtn.addEventListener('click', () => {
    const selector = document.querySelectorAll('.tile')
    selector.forEach(tile => {
        
    })
})


//---WINNING CONDITIONS-----
    //KEEP AN ARRAY 



//--------SCRAPPED CODE/DIDN'T WORK-------------
// const addDiv = () => {
    //     for (i = 0; i <42; i++) {
        //     const div = document.createElement('div')
        //     div.innerText = ' ' 
        //     }
        
        //     document.querySelector('#game-container').appendChild(div)
        // }
        
// addDiv()

