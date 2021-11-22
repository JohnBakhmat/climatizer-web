import axios from 'axios'
export default axios.create({
	baseURL: "http://192.168.0.106:3099/",
	headers: {
		'Content-Type': "application/json",
		'Access-Control-Allow-Origin': "*"
	},
	timeout: 2000
})