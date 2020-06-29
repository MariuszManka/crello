import { CONSTANS } from '../actions'

let tagsID = 5

const initialState = {
   infoMenu: {
      author: 'Mariusz Mańka',
      email: 'mariuszmanka2@gmail.com',
      avatarLetters: 'MM',
      avatarImage: undefined,
      description: ''
   },

   tagsMenu: {
      tags: [
         { id: 0, color: '#ff9800', name: 'Do zrobienia', },
         { id: 1, color: '#00bcd4', name: 'W trakcie', },
         { id: 2, color: '#424242', name: 'Do testów', },
         { id: 3, color: '#2e7d32', name: 'Zaakceptowane', },
         { id: 4, color: '#f44336', name: 'Odrzucone', },
      ]
   }

}

const subMenusReducer = (state = initialState, action) => {
   switch (action.type) {

      case CONSTANS.SET_INFO_DESCRIPTION: {
         const newState = state
         newState.infoMenu.description = action.payload
         state.infoMenu = { ...newState.infoMenu }
         return { ...state }
      }

      case CONSTANS.CHANGE_TAG: {
         const newState = state
         const { color, name, id } = action.payload
         newState.tagsMenu.tags.filter(item => item.id === id).map(item => {
            if (name.trim() && item.name !== name)
               item.name = name

            item.color = color
         })
         state.tagsMenu = { ...newState.tagsMenu }
         return { ...state }
      }

      case CONSTANS.ADD_TAG: {
         const { color, name } = action.payload
         if (color && name) {
            const newState = state
            newState.tagsMenu.tags.push({ id: tagsID, color, name })
            state.tagsMenu = { ...newState.tagsMenu }
            tagsID++
            return { ...state }
         }
         else {
            return state
         }

      }

      default:
         return state
   }
}

export default subMenusReducer 
