import { CONSTANS } from '../actions'

export const addCard = (listID, text) => {
   return {
      type: CONSTANS.ADD_CARD,
      payload: { listID, text }
   }
}
