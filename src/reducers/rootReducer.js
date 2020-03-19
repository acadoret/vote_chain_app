const initState = {
    loggedIn: false,
    isNavbarScrolled: false,
    userInfo: false
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "NAVBAR_SCROLLED":
            console.log('NAVBAR_SCROLLED')
            return {
                // ...state pour ne pas ecraser les autres data
                ...state,
                isNavbarScrolled: action.isNavbarScrolled,
            }
        case "LOGIN_USER":
            console.log('LOGIN_ISER')
            return {
                // ...state pour ne pas ecraser les autres data
                ...state,
                loggedIn: action.loggedIn,
                userInfo: action.userInfo,
            }
        case "LOGOUT_USER":
            console.log('LOGOUT_ISER')
            return {
                // ...state pour ne pas ecraser les autres data
                ...state,
                loggedIn: action.loggedIn,
                userInfo: action.userInfo,
            }
        default:
            return state
    }
}

export default rootReducer