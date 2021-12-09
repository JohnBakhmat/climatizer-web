import core from "../core"
import { successToast } from "../toasts"
const token = () => localStorage.getItem('idToken')
const options = {
	headers: {
		'Authorization': 'Bearer ' + token()
	}
}

export const get = (callback: any) => {
	core.get('/climateSetting', options)
		.then(response => callback(response))
		.catch((error) => {
			console.error(error)
		})
}
export const put = (data: any, callback: any) => {
	const { _id, __v, ...rest } = data

	core.put(`/climateSetting/${_id}`, { ...rest }, options)
		.then(response => {
			if (response.status === 200) successToast(`Access: ${_id}, was successfully updated!`)
			callback(response)
		}
		)
		.catch((error) => {
			console.error(error)
		})
}
export const post = (data: any, callback: any) => {
	core.post('/climateSetting', data, options).then(response => {
		if (response.status === 200) successToast(`Access ${response.data?._id} was successfully Created!`)
		callback(response)
	}
	)
		.catch((error) => {
			console.error(error)
		})
}

export const accessDelete = (data: any, callback: any) => {
	core.delete(`/climateSetting/${data._id}`, options).then(response => {
		if (response.status === 200) successToast(`Access ${response.data?._id} was successfully Deleted!`)
		callback(response)
	}
	)
		.catch((error) => {
			console.error(error)
		})
}