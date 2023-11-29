const topnavBurger = document.getElementById('topnav-burger')

topnavBurger.onclick = () => {
    const [tnbger] = document.getElementsByClassName('topnav-menu')
    tnbger.classList.toggle('showflex')
}
