let mainPage = '',
    messeges = '',
    settings = '',
    home = ''

const loadPage = async (page) => {
    const res = await fetch(page)
    return resDom = await res.text()
}
const loadAllPages = async () => {
    mainPage = await loadPage('components/main.html')
    messeges = await loadPage('components/messeges.html')
    settings = await loadPage('components/settings.html')
    home = await loadPage('components/main.html')
}
var rootD = document.getElementById('root')
const main = async () => {
    await loadAllPages()
    rootD.innerHTML = mainPage
    routes = {
        '/': mainPage,
        '/index.html': home,
        '/messeges': messeges,
        '/settings': settings
    }
}
main()
function onNavClick(pathname){
    window.history.replaceState(
        {},
        pathname,
        window.location.origin + pathname
    )
    navigateStyle(pathname)
    rootD.innerHTML = routes[pathname]
}
window.onpopstate = () => {
    rootD.innerHTML = routes[window.location.pathname]
    navigateStyle(location.pathname)
    console.log(location.pathname)
}

// navigator
const dashBtn = document.getElementById('dash-btn'),
        mesbtn = document.getElementById('mes-btn'),
        setBtn = document.getElementById('set-btn')

const navigateStyle = (pathname) => {
        if(pathname === '/' || pathname == '/index.html'){
            dashBtn.classList.add('active')
            mesbtn.classList.remove('active')
            setBtn.classList.remove('active')
        }
        if(pathname === '/messeges'){
            mesbtn.classList.add('active')
            dashBtn.classList.remove('active')
            setBtn.classList.remove('active')
        }
        if(pathname === '/settings'){
            setBtn.classList.add('active')
            dashBtn.classList.remove('active')
            mesbtn.classList.remove('active')
        }
}

const navigate = () => {
    dashBtn.addEventListener('click', () => {
        onNavClick('/')
        return false
    })
    mesbtn.addEventListener('click', () => {
        onNavClick('/messeges')
        return false
    })
    setBtn.addEventListener('click', () => {
        onNavClick('/settings')
        return false
    })
}
navigate()

console.log('Script loaded succesfully')


