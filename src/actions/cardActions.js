import { CONSTANS } from '../actions'

/**
 * Akcja pozwalająca na dodanie nowej karty
 * @param {String} listID - ID dodanej karty
 * @param {String} text - tekst który ma się znaleźć w karcie
 */
export const addCard = (listID, text) => {
   return {
      type: CONSTANS.ADD_CARD,
      payload: { listID, text }
   }
}
export const setPriorityTag = (name, cardID) => {
   return {
      type: CONSTANS.SET_PRIORIT_TAG,
      payload: { name, cardID }
   }
}

export const setTags = (tags, cardID) => {
   return {
      type: CONSTANS.SET_TAGS,
      payload: { tags, cardID }
   }
}