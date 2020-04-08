import { CONSTANS } from '../actions'

let tagsID = 5

const initialState = {
   infoMenu: {
      author: 'Mariusz Mańka',
      email: 'mariuszmanka2@gmail.com',
      avatarLetters: 'MM',
      avatarImage: undefined,
      description: 'Pierwsza lista Crello stworzona przez: Mariusz Mańka'
   },

   tagsMenu: {
      tags: [
         { id: 0, color: '#fe346e', name: 'Ważne', },
         { id: 1, color: '#8e44ad', name: 'Frontend', },
         // { id: 2, color: '#f3c623', name: 'Do zrobienia', },
         { id: 3, color: '#3cc900', name: 'Do testów', },
         { id: 4, color: '#323232', name: 'Backend', },

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
