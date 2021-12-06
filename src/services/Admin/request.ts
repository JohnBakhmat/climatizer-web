import core from "../core"
import { successToast } from "../toasts"
const token = () => localStorage.getItem('idToken')
const options = {
	headers: {
		'Authorization': 'Bearer ' + token()
	}
}

export const get = (callback: any) => {
	core.get('/request', options)
		.then(response => callback(response))
		.catch((error) => {
			console.error(error)
		})
}
export const post = (data: any, callback: any) => {
	core.post('/request/create', data, options).then(response => {
		if (response.status === 200) successToast(`Request ${response.data?._id} was successfully Created!`)
		callback(response)
	}
	)
		.catch((error) => {
			console.error(error)
		})
}