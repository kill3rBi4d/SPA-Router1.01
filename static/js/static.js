const dropBtn = document.getElementById('drop-btn'),
    menu = document.getElementById('menu')

const showMenu = () => {
    menu.style.display = menu.style.display !== 'flex' ? 'flex' : 'none'
}

window.onclick = function(e){
    if(e.target.matches('#drop-btn') || e.target.matches('#fas'))
        console.log('target matched')
    else
        menu.style.display = 'none'
        console.log('outside target', e.target)
}