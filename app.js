//---GLOBAL HTML ELEMENTS-----
tile = document.querySelector('.tile')
button = document.querySelector('#button')


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







//--------SCRAPPED CODE/DIDN'T WORK-------------
// console.log('js testing')
// const addDiv = () => {
//     for (i = 0; i <42; i++) {
//     const div = document.createElement('div')
//     div.innerText = ' ' 
//     }
    
//     document.querySelector('#game-container').appendChild(div)
// }
