import { CONSTANS } from '../actions'
/**
 * Akcja pozwalająca na dodanie nowej listy
 * @param {String} title - tytuł nowej listy 
 */
export const addList = (title) => {
   return {
      type: CONSTANS.ADD_LIST,
      payload: title
   }
}
/**
 * Akcja pozwalająca na zmianę tytułu listy
 * @param {String} title  - stary tytuł, używany jako id
 * @param {String} newTitle  - nowy tytuł
 */
export const changeListTitle = (title, newTitle) => {
   return {
      type: CONSTANS.CHANGE_LIST_TITLE,
      payload: { title, newTitle }
   }
}

/**
 * Akcja pozwalająca na zmianę pozycji listy (przesuwanie listy względem innych)
 * @param {String} droppableIdStart  - ID elementu który jest droppable dla list jest ono równe "all-lists" (Nadane w pliku /TrelloList/index.js)
 * @param {String} droppableIdEnd - ID elementu który jest droppable, dla list jest ono równe "all-lists" (Nadane w pliku /TrelloList/index.js)
 * @param {Number} droppableIndexStart - Index pozycji na której zaczął się scroll
 * @param {Number} droppableIndexEnd  -Index pozycji na której skończył się scroll
 * @param {Number} draggableId - ID elemeentu który jest draggable, dla list jest ono równe 'list'
 * @param {String} type  - typ akcji
 */
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