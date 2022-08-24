import axios from "axios"

const API_URL = process.env.API_URL as string

const isLoggedIn = async () => {
	const response = await axios({
		url: `${API_URL}isLoggedIn`,
		method: "GET",
		withCredentials: true,
	})
	return response
}

const isAdmin = async () => {
	const response = await axios({
		url: `${API_URL}isAdmin`,
		method: "GET",
		withCredentials: true,
	})
	return response
}
export { isLoggedIn, isAdmin }
