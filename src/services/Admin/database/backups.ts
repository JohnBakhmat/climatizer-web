import core from "../../core"
const token = () => localStorage.getItem('idToken')
const options = {
	headers: {
		'Authorization': 'Bearer ' + token()
	}
}

export const getBackups = (callback?: Function) => {
	core.get('/backups', options).then(response => {
		console.dir(response)
		callback && callback(response.data)
	}).catch((error) => {
		console.error(error)
	})
}

export const applyBackup = (backup: String, callback?: Function) => {
	core.post('/apply-backup', { backup }, options).then(response => {
		console.log(response)
		callback && callback(response.data)
	}).catch(error => {
		console.error(error)
	})
}