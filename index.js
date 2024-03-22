const captionButton = document.querySelector('.js-caption-button')
const closeButton = document.querySelector('.js-modal-btn')
const backdrop = document.querySelector('.backdrop')

captionButton.addEventListener('click', showModal)


closeButton.addEventListener('click', hideModal)

backdrop.addEventListener('click', e => {
if(e.target === e.currentTarget)
hideModal()
})


function showModal (){
backdrop.classList.add('show-modal')
window.addEventListener('keydown' ,
onCloseEsc )
}

function hideModal (){
backdrop.classList.remove('show-modal')
window.removeEventListener('keydown' , onCloseEsc )
}


function onCloseEsc (e) {
if(e.key === 'Escape'){
hideModal ()
}
}