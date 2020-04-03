import { CONSTANS } from '../actions'

const initialState = {
   title: 'Menu',
   open: false,
   iconVisible: true,
   menuIcons: [
      { id: 0, icon: 'info', description: 'Informacje o tablicy' },
      { id: 1, icon: 'add_photo_alternate', description: 'Zmień tło' },
      { id: 2, icon: 'search', description: 'Szukaj kart' },
      { id: 3, icon: 'local_offer', description: 'Etykiety' },
      { id: 4, icon: 'archive', description: 'Archiwum' },
      { id: 5, icon: 'settings', description: 'Ustawienia' },
   ]
}

const menuReducer = (state = initialState, action) => {
   switch (action.type) {

      case CONSTANS.SET_MENU_OPEN:
         {
            if (state.open !== action.payload) {
               const newState = state
               newState.open = action.payload
               return { ...newState }
            }
            else {
               return state
            }
         }


      case CONSTANS.SET_ICON_VISIBLE: {
         if (state.iconVisible !== action.payload) {
            const newState = state
            newState.iconVisible = action.payload
            return { ...newState }
         }
         else {
            return state
         }
      }

      case CONSTANS.MENU_CLOSE:
         {
            const { isOpen, isIconVisible } = action.payload
            const newState = state
            newState.open = isOpen
            newState.iconVisible = isIconVisible
            state.title = 'Menu'
            return { ...newState }
         }


      default:
         return state
   }
}

export default menuReducer 
