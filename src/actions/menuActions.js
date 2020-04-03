import { CONSTANS } from '../actions'

/**
 * 
 * @param {Bool} value - ustawianie widoczności ikony powrotu 
 */
export const setMenuOpen = (value) => {
   return {
      type: CONSTANS.SET_MENU_OPEN,
      payload: value
   }
}

/**
 * 
 * @param {Bool} value  - ustawianie widoczności ikony powrotu
 */
export const setIconVisible = (value) => {
   return {
      type: CONSTANS.SET_ICON_VISIBLE,
      payload: value
   }
}
/**
 * 
 * @param {Bool} isOpen  - zmienna sterująca tym czy menu jest otwarte
 * @param {Bool} isIconVisible - zmienna sterująca widocznością ikony powrotu
 */

export const menuClose = (isOpen, isIconVisible) => {
   return {
      type: CONSTANS.MENU_CLOSE,
      payload: {
         isOpen,
         isIconVisible
      }
   }
}