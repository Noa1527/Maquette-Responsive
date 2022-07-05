const images = document.getElementsByClassName('selectorAll')
const dotes = document.getElementsByClassName('logoVoyant')
const nbrImages = images.length
const nbrDotes = dotes.length
const suivant = document.querySelector('.right')
const precedent = document.querySelector('.left')
let count = 0

function slideSuivant(){
    
    images[count].classList.remove('activeImg')
    dotes[count].classList.remove('redDote')
    
    if (count < nbrImages -1){
        count++
    } else {
        count = 0
    }
    
    images[count].classList.add('activeImg')
    dotes[count].classList.add('redDote')
}
suivant.addEventListener('click', slideSuivant)

function slideprecedent(){

    images[count].classList.remove('activeImg')
    dotes[count].classList.remove('redDote')

    if (count > 0){
        count--
    } else {
        count = nbrImages -1
    }

    images[count].classList.add('activeImg')
    dotes[count].classList.add('redDote') 
}
precedent.addEventListener('click', slideprecedent)

function keypress(e){
    
    if (e.keyCode === 37){
        
        slideprecedent()
    } else if (e.keyCode === 39){
        slideSuivant()
    }
}
document.addEventListener('keydown', keypress)