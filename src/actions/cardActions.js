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
