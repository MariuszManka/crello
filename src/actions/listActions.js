import { CONSTANS } from '../actions'

export const addList = (title) => {
   return {
      type: CONSTANS.ADD_LIST,
      payload: title
   }
}

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