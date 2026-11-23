import { createId } from "./createId";
import { CONSTANS } from "./constants";

/**
 * Akcja pozwalająca na dodanie nowej karty
 * @param {String} listID - ID dodanej karty
 * @param {String} text - tekst który ma się znaleźć w karcie
 */
export const addCard = (listID, text) => {
  return {
    type: CONSTANS.ADD_CARD,
    payload: { id: createId("card"), listID, text },
  };
};
export const setPriorityTag = (name, cardID) => {
  return {
    type: CONSTANS.SET_PRIORIT_TAG,
    payload: { name, cardID },
  };
};

export const setTags = (tags, cardID) => {
  return {
    type: CONSTANS.SET_TAGS,
    payload: { tags, cardID },
  };
};

export const changeCardDescription = (newDescription, cardID) => {
  return {
    type: CONSTANS.CHANGE_CARD_DESCRIPTION,
    payload: { newDescription, cardID },
  };
};
