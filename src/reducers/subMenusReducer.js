import { CONSTANS } from "../actions/constants";

const initialState = {
  infoMenu: {
    author: "Mariusz Mańka",
    email: "mariuszmanka2@gmail.com",
    avatarLetters: "MM",
    avatarImage: undefined,
    description: "",
  },

  tagsMenu: {
    tags: [
      { id: 0, color: "#ff9800", name: "Do zrobienia" },
      { id: 1, color: "#00bcd4", name: "W trakcie" },
      { id: 2, color: "#424242", name: "Do testów" },
      { id: 3, color: "#2e7d32", name: "Zaakceptowane" },
      { id: 4, color: "#f44336", name: "Odrzucone" },
      { id: 5, color: "#ff9800", name: "Ważne" },
    ],
  },
};

const subMenusReducer = (state = initialState, action) => {
  const p = action.payload;
  switch (action.type) {
    case CONSTANS.SET_INFO_DESCRIPTION:
      return { ...state, infoMenu: { ...state.infoMenu, description: p } };
    case CONSTANS.CHANGE_TAG:
      return {
        ...state,
        tagsMenu: {
          ...state.tagsMenu,
          tags: state.tagsMenu.tags.map((tag) =>
            tag.id === p.id
              ? { ...tag, color: p.color, name: p.name.trim() || tag.name }
              : tag,
          ),
        },
      };
    case CONSTANS.ADD_TAG:
      return p.color && p.name.trim()
        ? {
            ...state,
            tagsMenu: {
              ...state.tagsMenu,
              tags: [
                ...state.tagsMenu.tags,
                { id: p.id, color: p.color, name: p.name.trim() },
              ],
            },
          }
        : state;
    default:
      return state;
  }
};
export default subMenusReducer;
