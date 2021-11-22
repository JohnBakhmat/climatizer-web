import axios from 'axios'
export default axios.create({
	baseURL: "http://localhost:3099/",
	headers: {
		'Content-Type': "application/json",
		'Access-Controll-Allow-Origin': "*"
	}
})