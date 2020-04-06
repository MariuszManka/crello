import { CONSTANS } from '../actions'

const initialState = {
   infoMenu: {
      author: 'Mariusz Mańka',
      email: 'mariuszmanka2@gmail.com',
      avatarLetters: 'MM',
      avatarImage: undefined,
      description: 'Pierwsza lista Crello stworzona przez: Mariusz Mańka'
   },

   tagsMenu: {
      tagsColors: [
         { id: 0, color: '#fe346e', name: 'Ważne', },
         { id: 1, color: '#8e44ad', name: 'Frontend', },
         { id: 2, color: '#f3c623', name: 'Do zrobienia', },
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


      case CONSTANS.CHANGE_TAG_NAME:
         const newState = state
         newState.tagsMenu.tagsColors.filter(item => item.id === action.payload.id).map(item => item.color = action.payload.color)
         state.tagsMenu = { ...newState.tagsMenu }
         return { ...state }

      default:
         return state
   }
}

export default subMenusReducer 
