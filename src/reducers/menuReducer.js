import { CONSTANS } from '../actions'
import React from 'react'
import { InfoMenu, ChangePictureMenu, FindCardsMenu, TagsMenu, PinnedMenu, ArchiveMenu, SettingsMenu } from '../components/Menu/SubMenus'

const initialState = {
   title: 'Menu',
   open: false,
   iconVisible: true,
   menuIcons: [
      { id: 0, icon: 'info', description: 'Informacje o tablicy', component: <InfoMenu /> },
      { id: 1, icon: 'add_photo_alternate', description: 'Zmień tło', component: <ChangePictureMenu /> },
      { id: 2, icon: 'search', description: 'Szukaj kart', component: <FindCardsMenu /> },
      { id: 3, icon: 'local_offer', description: 'Etykiety', component: <TagsMenu /> },
      { id: 4, icon: 'attach_file', description: 'Przypięte', component: <PinnedMenu /> },
      { id: 5, icon: 'archive', description: 'Archiwum', component: <ArchiveMenu /> },
      { id: 6, icon: 'settings', description: 'Ustawienia', component: <SettingsMenu /> },
   ],
   currentOption: [],
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
            newState.currentOption = []
            state.title = 'Menu'
            return { ...newState }
         }

      case CONSTANS.MENU_OPTION_CLICK:
         {

            const { id, title } = action.payload
            const newState = { ...state }
            newState.currentOption = newState.menuIcons.filter(icon => icon.id === id)
            newState.open = true
            newState.title = title
            newState.iconVisible = true
            return { ...newState }
         }


      default:
         return state
   }
}

export default menuReducer 
