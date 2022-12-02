console.log('JS FILE IS LINKED')
//---GLOBAL VARIABLES-----
tile = document.querySelector('.tile')
container = document.querySelector('.game-container')
buttons = document.querySelector('#button')
resetBtn = document.querySelector('#reset')

//----DOM EVENT LISTENER-----
document.addEventListener('DOMContentLoaded', () => {
    addH1()
    createBtn()
})

//----H1 TITLE-----
const addH1 = () => {
    const h1 = document.createElement('h1')
    h1.innerText = 'Connect Four'
    document.querySelector('body').prepend(h1)
}

//----CREATE 42 BUTTONS 
const createBtn = () => {
    for (let i = 0; i <42; i++) {
        const btns = document.createElement('button')
        btns.classList.add('tile')
        container.appendChild(btns) 
    }
}



//-----CLICK EVENT LISTENERS-----
buttons.addEventListener('click', (e) => {
    console.log('e.target')
})

    //---RESET BUTTON----
resetBtn.addEventListener('click', () => {
    const selector = document.querySelectorAll('.tile')
    selector.forEach(tile => {
        
    })
})






//--------SCRAPPED CODE/DIDN'T WORK-------------
// const addDiv = () => {
    //     for (i = 0; i <42; i++) {
        //     const div = document.createElement('div')
        //     div.innerText = ' ' 
        //     }
        
        //     document.querySelector('#game-container').appendChild(div)
        // }
        
// addDiv()

