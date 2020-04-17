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
            title: "Sprawdzić błędy na gitlabie",
            description: 'uis aliquet eros eu lacus fermentum rhoncus nec id sem. Sed id cursus lacus. Vivamus non orci at sapien aliquet rutrum vel a odio. Suspendisse eget lectus eu ligula maximus elementum. Nunc ac sagittis urna, a pulvinar dui.',
            priorityTag: '',
            tags: [],
         },
         {
            id: `card-${1}`,
            title: 'Zrobić poprawki szaty graficznej',
            description: 'Praesent ornare lacinia dolor nec luctus',
            priorityTag: '',
            tags: [],
         }
      ]
   },
   {
      id: `list-${1}`,
      title: "W trakcie",
      cards: [
         {
            id: `card-${2}`,
            title: "Stworzyć implementację Trello",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla arcu vel libero semper, a malesuada justo sollicitudin. Donec tincidunt sapien ligula',
            priorityTag: '',
            tags: [],
         },
         {
            id: `card-${3}`,
            title: 'Przepracować tutorial na Youtube',
            description: ' Morbi ultricies lectus sit amet velit mattis, ac egestas purus tempor. Aenean tempor blandit orci laoreet vulputate. Sed consequat fermentum tortor, id molestie erat convallis ut.',
            priorityTag: '',
            tags: [],
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

      case CONSTANS.SET_PRIORIT_TAG: {
         const { name, cardID } = action.payload
         const newState = state
         newState.map(item => item.cards.filter(card => card.id === cardID).map(c => c.priorityTag = name))

         return [...newState]
      }
      case CONSTANS.SET_TAGS: {
         const { tags, cardID } = action.payload
         const newState = state
         newState.map(item => item.cards.filter(card => card.id === cardID).map(c => c.tags = tags))

         return [...newState]
      }
      default:
         return state
   }
}

export default listsReducer