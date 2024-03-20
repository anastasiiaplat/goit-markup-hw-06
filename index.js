const btn = document.querySelector('.btn-modal')
const modal = document.querySelector('.modal')
const backdrop = document.querySelector('.backdrop')

btn.addEventListener('click', e => {
if(e.target.nodeName !== 'BUTTON') return
showModal()
})

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