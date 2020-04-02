import { CONSTANS } from '../actions'

let listID = 2
let cardID = 4

const initialState = [
   {
      id: `list-${0}`,
      title: "Do zrobienia",
      cards: [
         {
            id: `card-${0}`,
            text: "Sprawdzić błędy na gitlabie",
         },
         {
            id: `card-${1}`,
            text: 'Zrobić poprawki szaty graficznej'
         }
      ]
   },
   {
      id: `list-${1}`,
      title: "W trakcie",
      cards: [
         {
            id: `card-${2}`,
            text: "Stworzyć implementację Trello",
         },
         {
            id: `card-${3}`,
            text: 'Przepracować tutorial na Youtube'
         }
      ]
   },


]

const listsReducer = (state = initialState, action) => {
   switch (action.type) {

      case CONSTANS.ADD_LIST:
         const newList = {
            id: listID,
            title: action.payload,
            cards: []
         }
         listID++
         return [
            ...state,
            newList
         ]


      case CONSTANS.CHANGE_LIST_TITLE:
         const { title, newTitle } = action.payload
         state.filter(v => v.title === title).map(list => {
            list.title = newTitle
            return list
         })
         return [...state]

      case CONSTANS.ADD_CARD: {
         const newCard = {
            text: action.payload.text,
            id: cardID
         }
         cardID++

         const newState = state.map(list => {
            if (list.id === action.payload.listID) {
               return {
                  ...list,
                  cards: [...list.cards, newCard]
               }
            }
            else {
               return list
            }
         })

         return newState
      }
      case CONSTANS.DRAG_HAPPEND: {

         const {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            type
         } = action.payload

         const newState = [...state]

         if (type === 'list') {
            const list = newState.splice(droppableIndexStart, 1)
            newState.splice(droppableIndexEnd, 0, ...list)
            return newState
         }

         //Same list drag
         if (droppableIdStart === droppableIdEnd) {
            const list = state.find(list => droppableIdStart === String(list.id))
            const card = list.cards.splice(droppableIndexStart, 1)
            list.cards.splice(droppableIndexEnd, 0, ...card)
         }

         //other list drag
         if (droppableIdStart !== droppableIdEnd) {
            const listStart = state.find(list => droppableIdStart === String(list.id))//card where drag happend
            const card = listStart.cards.splice(droppableIndexStart, 1)//delete dragged card from one list
            const listEnd = state.find(list => droppableIdEnd === String(list.id))//find list where drag ended
            listEnd.cards.splice(droppableIndexEnd, 0, ...card)
         }

         return newState
      }

      default:
         return state
   }
}

export default listsReducer