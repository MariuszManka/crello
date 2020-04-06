import { CONSTANS } from '../actions'

/**
 * 
 * @param {String} value -ustawienie opisu listy, wykorzystywane w sub menu InfoMenu
 */
export const setInfoDescription = (value) => {
   return {
      type: CONSTANS.SET_INFO_DESCRIPTION,
      payload: value
   }
}

/**
 * 
 * @param {String} color - nowy kolor listy
 * @param {Number} id - id etykiety
 */
export const changeTagColor = (color, id) => {
   return {
      type: CONSTANS.CHANGE_TAG_NAME,
      payload: { color, id }
   }
}
