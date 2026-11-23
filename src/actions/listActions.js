import { createId } from "./createId";
import { CONSTANS } from "./constants";
/**
 * Akcja pozwalająca na dodanie nowej listy
 * @param {String} title - tytuł nowej listy
 */
export const addList = (title) => {
  return {
    type: CONSTANS.ADD_LIST,
    payload: { id: createId("list"), title },
  };
};
/**
 * Akcja pozwalająca na zmianę tytułu listy
 * @param {String} listID - stabilny identyfikator listy
 * @param {String} newTitle  - nowy tytuł
 */
export const changeListTitle = (listID, newTitle) => {
  return {
    type: CONSTANS.CHANGE_LIST_TITLE,
    payload: { listID, newTitle },
  };
};

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
  type,
) => {
  return {
    type: CONSTANS.DRAG_HAPPEND,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId,
      type,
    },
  };
};
