import core from "../core"
import { successToast } from "../toasts"
const token = () => localStorage.getItem('idToken')
const options = {
	headers: {
		'Authorization': 'Bearer ' + token()
	}
}

export const buildingGet = (callback: any) => {
	core.get('/building', options)
		.then(response => callback(response))
		.catch((error) => {
			console.error(error)
		})
}
export const buildingPut = (data: any, callback: any) => {
	const { _id, __v, ...rest } = data

	core.put(`/building/${_id}`, { ...rest }, options)
		.then(response => {
			if (response.status === 200) successToast(`Building: ${_id}, was successfully updated!`)
			callback(response)
		}
		)
		.catch((error) => {
			console.error(error)
		})
}
export const buildingPost = (data: any, callback: any) => {
	core.post('/building', data, options).then(response => {
		if (response.status === 200) successToast(`Building ${response.data?._id} was successfully Created!`)
		callback(response)
	}
	)
		.catch((error) => {
			console.error(error)
		})
}

export const buildingDelete = (data: any, callback: any) => {
	core.delete(`/building/${data._id}`, options).then(response => {
		if (response.status === 200) successToast(`Building ${response.data?._id} was successfully Deleted!`)
		callback(response)
	}
	)
		.catch((error) => {
			console.error(error)
		})
}