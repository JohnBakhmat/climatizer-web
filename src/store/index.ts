import { configureStore } from "@reduxjs/toolkit";

import userReducer from './user'
import langReducer from './localization'
export default configureStore({
	reducer: {
		user: userReducer,
		lang: langReducer
	}
})
