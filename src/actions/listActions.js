import { CONSTANS } from '../actions'
/**
 * 
 * @param {String} title - tytuł nowej listy 
 */
export const addList = (title) => {
   return {
      type: CONSTANS.ADD_LIST,
      payload: title
   }
}
/**
 * 
 * @param {String} title  - stary tytuł, używany jako id
 * @param {String} newTitle  - nowy tytuł
 */
export const changeListTitle = (title, newTitle) => {
   return {
      type: CONSTANS.CHANGE_LIST_TITLE,
      payload: { title, newTitle }
   }
}


export const sort = (
   droppableIdStart,
   droppableIdEnd,
   droppableIndexStart,
   droppableIndexEnd,
   draggableId,
   type
) => {
   return {
      type: CONSTANS.DRAG_HAPPEND,
      payload: {
         droppableIdStart,
         droppableIdEnd,
         droppableIndexStart,
         droppableIndexEnd,
         draggableId,
         type
      }
   }
}