export default class User {
    static userid = 1
    id
    name
    password
    email
    cart
    balance
    ownedGame
    isadmin
    banned

    constructor(
        name = '',
        password = '',
        email = '',
        cart = [],
        balance = 0,
        ownedGame = [],
        isadmin = false,
        banned = false,
        id = 'u' + User.userid
    ) {
        User.userid++
        this.id = id
        this.name = name
        this.password = password
        this.email = email
        this.cart = cart
        this.balance = balance
        this.ownedGame = ownedGame
        this.isadmin = isadmin
        this.banned = banned
    }
}
