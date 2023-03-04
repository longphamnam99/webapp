import Cookies from 'js-cookie'

const TokenKey = 'Client-Token'

export function get_token() {
    return Cookies.get(TokenKey)
}

export function set_token(token) {
    return Cookies.set(TokenKey, token)
}

export function remove_token() {
    return Cookies.remove(TokenKey)
}