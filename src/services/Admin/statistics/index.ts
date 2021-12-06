import core from "../../core"
export const getDevices = (callback?: Function) => {
	core.get("/stat/devices").then(resp => {
		console.log(resp)
		callback && callback(resp.data)
	}).catch(error => {
		console.error(error)
	})
}
export const getActions = (callback?: Function) => {
	core.get("/stat/actions").then(resp => {
		console.log(resp)
		callback && callback(resp.data)
	}).catch(error => {
		console.error(error)
	})
}

export const getLogins = (callback?: Function) => {
	core.get("/stat/logins").then(resp => {
		console.log(resp)
		callback && callback(resp.data)
	}).catch(error => {
		console.error(error)
	})
}