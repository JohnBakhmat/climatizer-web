export const convertToUsername = (email: string): string => {
	let username: string = email.split('@')[0]
	if (email.includes('@nure.ua')) {
		username = username.replace('.', ' ')
	}
	return username
}