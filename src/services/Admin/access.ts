import core from "../core"
import { successToast } from "../toasts"
const token = () => localStorage.getItem('idToken')
const options = {
	headers: {
		'Authorization': 'Bearer ' + token()
	}
}

export const get = (callback: any) => {
	core.get('/access', options)
		.then(response => callback(response))
		.catch((error) => {
			console.error(error)
		})
}
export const put = (data: any, callback: any) => {
	const { _id, __v, ...rest } = data

	core.put(`/access/${_id}`, { ...rest }, options)
		.then(response => {
			if (response.status === 200) successToast(`Access: ${_id}, was successfully updated!`)
			callback(response)
		}
		)
		.catch((error) => {
			console.error(error)
		})
}