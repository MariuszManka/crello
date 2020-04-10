import { CONSTANS } from '../actions'

/**
 * Funkcja decydująca o tym czy menu jest otwarte czy nie
 * @param {Bool} value - true jeśli menu otwarte, false jeśli zamknięte
 */
export const setMenuOpen = (value) => {
   return {
      type: CONSTANS.SET_MENU_OPEN,
      payload: value
   }
}

/**
 *  Ustawianie widoczności ikony powrotu, jeśli menu jest otwarte ikona znika, jeśli podmenu jest otwarte ikona powraca
 * @param {Bool} value  - true jeśli ikona widoczna, false jeśli nie
 */
export const setIconVisible = (value) => {
   return {
      type: CONSTANS.SET_ICON_VISIBLE,
      payload: value
   }
}
/**
 * Obsługa zamknięcia menu
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
/**
 * Funkcja obsługująca klik w jedną z opcji menu. Funkcja ustawia rónież tytuł wyświetlajacy się na górnej belce menu, domyślnie: 'Menu', w zależności od klikniętej opcji tytuł się zmienia
 * @param {Number} id - ID danej opcji, potrzebne do ustalenia która opcja jest obecnie wyświetlana
 * @param {String} title  - Tytuł który ma się pojawić w górnej belce menu
 */
export const menuOptionClick = (id, title) => {
   return {
      type: CONSTANS.MENU_OPTION_CLICK,
      payload: { id, title }
   }
}