import core from "../core"
const token = () => localStorage.getItem('idToken')
export const get = (callback: any) => {
	core.get('/access', {
		headers: {
			'Authorization': 'Bearer ' + token()
		}
	}).then(response => callback(response)).catch((error) => {
		console.error(error)
	})
}