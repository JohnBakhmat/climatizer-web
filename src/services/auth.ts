//asdf
import core from './core'
import { User } from '../models/User'
import store from '../store'
import { loginUserAsync } from '../store/user'

export const login = (user: User) => {
	core.post('/auth/login', user).then((resp) => {
		localStorage.setItem('idToken', resp.data.idToken)
		store.dispatch(loginUserAsync(resp.data))
	}).catch(e => { console.error(e) })

}
export const getData = (idToken: string) => {

	// return core.post('/auth/renew', idToken)
}