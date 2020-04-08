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
 * akcja do zmiany koloru etykiety
 * @param {String} color - nowy kolor listy
 * @param {Number} id - id etykiety
 */
export const changeTagColor = (color, name, id) => {
   return {
      type: CONSTANS.CHANGE_TAG,
      payload: { color, name, id }
   }
}

/**
 * akcja do dodawania etykiet
 * @param {String} color - kolor nowej etykiety
 * @param {String} name - nazwa nowej etykiety
 */
export const addTag = (color, name) => {
   return {
      type: CONSTANS.ADD_TAG,
      payload: { color, name }
   }
}