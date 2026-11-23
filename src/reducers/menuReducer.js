import { CONSTANS } from "../actions/constants";

const initialState = {
  title: "Menu",
  open: false,
  iconVisible: true,
  menuIcons: [
    { id: 0, icon: "info", description: "Informacje o tablicy" },
    // { id: 1, icon: 'add_photo_alternate', description: 'Zmień tło' },
    { id: 1, icon: "search", description: "Szukaj kart" },
    { id: 2, icon: "local_offer", description: "Etykiety" },
    { id: 3, icon: "attach_file", description: "Przypięte" },
    { id: 4, icon: "layers", description: "Pliki" },
    { id: 5, icon: "calendar_today", description: "Kalendarz" },
    { id: 6, icon: "archive", description: "Archiwum" },
    { id: 7, icon: "settings", description: "Ustawienia" },
  ],
  currentOption: [],
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANS.SET_MENU_OPEN:
      return { ...state, open: action.payload };
    case CONSTANS.SET_ICON_VISIBLE:
      return { ...state, iconVisible: action.payload };
    case CONSTANS.MENU_CLOSE:
      return {
        ...state,
        open: action.payload.isOpen,
        iconVisible: action.payload.isIconVisible,
        currentOption: [],
        title: "Menu",
      };
    case CONSTANS.MENU_OPTION_CLICK:
      return {
        ...state,
        open: true,
        iconVisible: true,
        title: action.payload.title,
        currentOption: state.menuIcons.filter(
          (item) => item.id === action.payload.id,
        ),
      };
    default:
      return state;
  }
};
export default menuReducer;
