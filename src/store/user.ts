import { createSlice } from '@reduxjs/toolkit'
import { getData } from '../services/auth';
import { errorToast, successToast } from '../services/toasts';
import { convertToUsername } from '../utils/username';
const initialState: any = {
	isLoading: false,
	data: {}
}

const user = createSlice({
	name: 'user',
	initialState,
	reducers: {
		fetchUser: () => ({
			isLoading: true,
		}),
		updateUser: (state, action) => ({
			isLoading: false,
			data: { ...action.payload },
		}),
		removeUser: () => ({
			isLoading: false,
			data: {},
		}),
	}
});
export const selectUser = (state: any) => state.user.data
export const selectUserName = (state: any) => state.user?.data?.username
export const { fetchUser, updateUser, removeUser } = user.actions;
export default user.reducer
export const getUserUpdateAsync = () => async (dispatch: any) => {
	console.log(1231231)
	const idToken = localStorage.getItem('idToken');
	if (idToken) {
		getData(idToken).then(r => {
			const data = r.data
			const username = convertToUsername(data.email)
			dispatch(updateUser({
				username,
				...data
			}))

			successToast(`Hello, ${username}`, 1000)
		})
			.catch(e => {
				console.error(e)
				errorToast(`Sorry,${e}`)
			})
	} else {
		dispatch(removeUser());
	}
};
export const getUserAsync = () => (dispatch: any) => {
	dispatch(fetchUser())
	dispatch(getUserUpdateAsync());
}
export const loginUserAsync = (data: any) => (dispatch: any) => {
	dispatch(fetchUser())
	dispatch(updateUser(data))
}