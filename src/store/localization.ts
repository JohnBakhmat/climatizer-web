import { createSlice } from '@reduxjs/toolkit'
import store from '.';
import EN_US_LANG from '../assets/lang/en_us.json'
import UA_UA_LANG from '../assets/lang/ua_ua.json'
import { Language } from '../models/Language';

const initialState: any = {
	language: UA_UA_LANG,
	code: Language.UA_UA
}

const localization = createSlice({
	name: "lang",
	initialState,
	reducers: {
		switchLanguage: (state, action) => {
			switch (action.payload) {
				case Language.EN_US:
					return { ...state, language: EN_US_LANG, code: action.payload }

				case Language.UA_UA:
					return { ...state, language: UA_UA_LANG, code: action.payload }
			}
		}
	}
});

export const {
	switchLanguage
} = localization.actions

export const selectLanguagePack = (state: any) => state.lang.language
export const selectLanguageCode = (state: any) => state.lang.code

export const changeLanguagePack = (newPack: Language) => (dispatch: typeof store.dispatch) => {
	dispatch(switchLanguage(newPack));
}
export default localization.reducer