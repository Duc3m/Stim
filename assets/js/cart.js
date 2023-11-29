import gameList from './item.js'
import userList from './login.js'
import { userBalance } from './login.js'

const userId = localStorage.getItem('currentUser')
const popupWrapper = document.getElementById('popup-wrapper')
const [popupContent] = document.getElementsByClassName('popup-content')
let currcart = []
let paidcart = []
export const [curruser] = userList.filter((u) => u.id === userId)

if (userId) {
    for (const game of curruser.cart) {
        currcart.push(game)
    }
    for (const game of curruser.ownedGame) {
        paidcart.push(game)
    }
}

export function updateToLocacle() {
    let newuserList = userList.map((item) => {
        if (item.id === userId)
            return { ...item, cart: currcart, ownedGame: paidcart }
        return { ...item }
    })
    localStorage.setItem('userList', JSON.stringify(newuserList))
}

export function addToCart(id = 0) {
    if (currcart.includes(id)) {
        alert(`This game is already in Cart`)
        return
    }
    if (curruser.ownedGame.includes(id)) {
        alert(`You already owned this game`)
        return
    }
    currcart.push(id)
    updateToLocacle()
    alert("Added to cart")
}

const cartOpenButton = document.getElementById('cart')

function removeFromCart(id) {
    currcart = currcart.filter((c) => c !== id)
    updateToLocacle()
    popupContent.innerHTML = ''
    createCartPopUp()
}

function createCartPopUp() {
    let cartObject = gameList.filter((g) => currcart.includes(g.id))
    function sum() {
        let result = 0
        if (cartObject.length === 0) return result
        cartObject.forEach((item) => {
            result += item.price
        })
        return result
    }
    popupWrapper.style.top = '50%'
    const currlocale = window.location.href.toString().split('/').pop()
    popupContent.innerHTML = `        
    <div class="cartWrapper">
            <div class="totalCart">
                <span class="totalItemInCart">Total: ${currcart.length}</span>
                <span class="totalPrice">${sum().toLocaleString('us')}đ</span>
                <button class="totalCartButton" type="button">Pay All</button>
                <button class="removeCartButton">Remove All</button>
            </div>
            <div class="cart-content">
            ${cartObject
                .map(
                    (item) => `<div class="cartitem">
                                <img class="cartimg" src="${
                                    item.img.split('/')[1] == 'assets'
                                        ? currlocale == 'index.html'
                                            ? `.${item.img}`
                                            : `../..${item.img}`
                                        : item.img
                                }" alt="">
                                <span class="cartname">${item.name}</span>
                                <span class="cartprice">${item.price.toLocaleString(
                                    'us'
                                )}đ</span>
                                <button class="removeCartButton" value="${
                                    item.id
                                }">Remove</button>
                            </div>`
                )
                .join('')}
            </div>
        </div>`
    const deletebutton = document.getElementsByClassName('removeCartButton')
    for (const btn of deletebutton) {
        btn.onclick = () => {
            removeFromCart(btn.value)
        }
    }
    const [deleteall] = document.getElementsByClassName('removeCartButton')
    deleteall.onclick = () => {
        currcart = []
        updateToLocacle()
        createCartPopUp()
    }

    const [payAll] = document.getElementsByClassName('totalCartButton')
    payAll.onclick = () => {
        if (sum() == 0) return
        if (curruser.balance >= sum()) {
            const alertMessage = document.getElementById('alert-wrapper')
            alertMessage.innerHTML = `<div class="payment-alert">
            <h2 class="alert-message">Do you want to pay all?</h2>
            <button class="confirmbtn">Yes</button>  
            <button class="cancelbtn">No</button>
            </div>`
            alertMessage.classList.toggle('showflex')
            const [alertContent] =
                document.getElementsByClassName('payment-alert')
            alertContent.onclick = () => {
                event.stopPropagation()
            }
            const [confirmbtn] = document.getElementsByClassName('confirmbtn')
            const [Cancelbtn] = document.getElementsByClassName('cancelbtn')
            Cancelbtn.onclick = () => {
                alertMessage.innerHTML = ''
                alertMessage.classList.toggle('showflex')
            }
            confirmbtn.onclick = () => {
                curruser.balance -= sum()
                for (const game of currcart) paidcart.push(game)
                curruser.ownedGame = paidcart
                currcart = []
                updateToLocacle()
                userBalance.textContent = `${curruser.balance.toLocaleString(
                    'us'
                )}đ`
                alertMessage.innerHTML = ''
                alertMessage.classList.toggle('showflex')
                createCartPopUp()
            }
        } else alert('Bạn không đủ tiền trong tài khoản')
    }

    const body = document.getElementsByTagName('BODY')[0]
    body.style.overflow = 'hidden'
}

cartOpenButton.onclick = () => {
    popupWrapper.style.top = '50%'
    createCartPopUp()
}
