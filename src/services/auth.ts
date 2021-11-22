//asdf
import core from './core'
type User = { email: string, password: string }
export const login = (user: User) => {
	core.post('/auth/login', user)
		.then(r => {
			console.log(r)
		})
		.catch(e => {
			console.error(e)
		})
}