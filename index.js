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
    // document.body.style.overflow = “hidden”
}

function hideModal (){
    backdrop.classList.remove('show-modal')
    window.removeEventListener('keydown' , onCloseEsc )
    // document.body.style.overflow = “”
}


function onCloseEsc (e) {
    if(e.code === 'Escape'){
        hideModal ()
    }
}