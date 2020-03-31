import { CONSTANS } from '../actions'

let listID = 2
let cardID = 4

const initialState = [
   {
      id: 0,
      title: "Do zrobienia",
      cards: [
         {
            id: 0,
            text: "Sprawdzić błędy na gitlabie",
         },
         {
            id: 1,
            text: 'Zrobić poprawki szaty graficznej'
         }
      ]
   },
   {
      id: 1,
      title: "W trakcie",
      cards: [
         {
            id: 2,
            text: "Stworzyć implementację Trello",
         },
         {
            id: 3,
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
            draggableId
         } = action.payload

         const newState = [...state]
         //Same list drag
         if (droppableIdStart === droppableIdEnd) {

            const list = state.find(list => droppableIdStart === String(list.id))
            const card = list.cards.splice(droppableIndexStart, 1)
            list.cards.splice(droppableIndexEnd, 0, ...card)
         }

         return newState
      }

      default:
         return state
   }
}

export default listsReducer