//asdf
import core from './core'
import { User } from '../models/User'
import store from '../store'
import { loginUserAsync } from '../store/user'
import { errorToast } from './toasts'

export const login = (user: User) => {
	core.post('/auth/login', user).then((resp) => {
		localStorage.setItem('idToken', resp.data.idToken)
		store.dispatch(loginUserAsync(resp.data))
	}).catch(e => {
		errorToast(`Sorry! Couldn't connect to server!`)
	})

}
export const getData = (idToken: string) => {

	return core.post('/auth/renew', { idToken })
}