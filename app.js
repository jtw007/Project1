//---GLOBAL HTML ELEMENTS-----

//----DOM EVENT LISTENER-----
document.addEventListener('DOMContentLoaded', () => {
    addH1()
    addDiv()
})

//----H1 TITLE-----
const addH1 = () => {
    const h1 = document.createElement('h1')
    h1.innerText = 'Connect Four'
    document.querySelector('body').prepend(h1)
}

//----Create div elements-----
const addDiv = () => {
    for (i = 0; i <42; i++) {
    const div = document.createElement('div')
    div.innerText = ' ' 
    }
    
    document.querySelector('#game-container').appendChild(div)
}





//--------SCRAPPED CODE/DIDN'T WORK-------------
// console.log('js testing')