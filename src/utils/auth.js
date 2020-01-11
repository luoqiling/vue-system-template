import Cookies from 'js-cookie'
import defaultSettings from '@/settings'

const tokenKey = `${process.env.VUE_APP_ENV}${defaultSettings.name}token`

export function getToken() {
  return Cookies.get(tokenKey)
}

export function setToken(token) {
  return Cookies.set(tokenKey, token)
}

export function removeToken() {
  return Cookies.remove(tokenKey)
}
