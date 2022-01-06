import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Language } from '../../../../models/Language'
import {
  selectLanguageCode,
  switchLanguage,
} from '../../../../store/localization'
import style from './style.module.sass'
interface Props {}

const LanguagePicker = (props: Props) => {
  const language = useSelector(selectLanguageCode)
  const dispatch = useDispatch()
  const styleBinder = (code: Language) => {
    return code == language ? style.selected : style.diselected
  }
  const handleChange = (newPack: Language) => {
    dispatch(switchLanguage(newPack))
  }
  return (
    <div className={style.wrap}>
      <button
        onClick={() => handleChange(Language.EN_US)}
        className={styleBinder(Language.EN_US)}
      >
        ENG
      </button>
      <button
        onClick={() => handleChange(Language.UA_UA)}
        className={styleBinder(Language.UA_UA)}
      >
        УКР
      </button>
    </div>
  )
}

export default LanguagePicker
