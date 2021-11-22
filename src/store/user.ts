import { createSlice } from '@reduxjs/toolkit'

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
			data: action.payload,
		}),
		removeUser: () => ({
			isLoading: false,
			data: {},
		}),
	}
});

export const { fetchUser, updateUser, removeUser } = user.actions;
export default user.reducer
export const getUserUpdateAsync = () => async (dispatch: any) => {
	console.log(1231231)
	const idToken = localStorage.getItem('idToken');
	if (idToken) {
		// getData(idToken).then(r => { })
		// 	.catch(e => {
		// 		console.error(e)
		// 	})
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