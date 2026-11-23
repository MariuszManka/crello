import { CONSTANS } from "../actions/constants";

const initialState = [
  {
    id: `list-${0}`,
    title: "Do zrobienia",
    cards: [
      {
        id: `card-${0}`,
        title: "Sprawdzić błędy na gitlabie",
        description:
          "uis aliquet eros eu lacus fermentum rhoncus nec id sem. Sed id cursus lacus. Vivamus non orci at sapien aliquet rutrum vel a odio. Suspendisse eget lectus eu ligula maximus elementum. Nunc ac sagittis urna, a pulvinar dui.",
        priorityTag: "",
        tags: [],
        links: [
          {
            id: 0,
            text: "Dokumentacja projektu",
            link: "https://example.com/docs",
          },
          {
            id: 1,
            text: "Przykładowy zasób",
            link: "https://example.com/resources",
          },
        ],
      },
      {
        id: `card-${1}`,
        title: "Zrobić poprawki szaty graficznej",
        description: "Praesent ornare lacinia dolor nec luctus",
        priorityTag: "",
        tags: [],
        links: [
          {
            id: 0,
            text: "Dokumentacja projektu",
            link: "https://example.com/docs",
          },
          {
            id: 1,
            text: "Przykładowy zasób",
            link: "https://example.com/resources",
          },
        ],
      },
    ],
  },
  {
    id: `list-${1}`,
    title: "W trakcie",
    cards: [
      {
        id: `card-${2}`,
        title: "Stworzyć implementację Trello",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla arcu vel libero semper, a malesuada justo sollicitudin. Donec tincidunt sapien ligula",
        priorityTag: "",
        tags: [],
        links: [
          {
            id: 0,
            text: "Trello - strona główna",
            link: "https://trello.com/pl",
          },
          {
            id: 1,
            text: "Przykładowy zasób",
            link: "https://example.com/resources",
          },
        ],
      },
      {
        id: `card-${3}`,
        title: "Przepracować tutorial na Youtube",
        description: "",
        priorityTag: "",
        tags: [],
        links: [
          {
            id: 0,
            text: "Kurs do przepracowania",
            link: "https://www.youtube.com/watch?v=RDQGPs7StNA",
          },
          {
            id: 1,
            text: "Przykładowy zasób",
            link: "https://example.com/resources",
          },
        ],
      },
      {
        id: `card-${4}`,
        title: "Dodać lepsze tworzenie kart",
        description:
          "Dodać przycisk przy tworzeniu karty który pozwoli na więcej akcji przy tworzeniu karty w liście. Będzie można od razu zrobić listę, dodać opis, przypisać etykiety, dodać niebedne linki oraz komentarze itp",
        priorityTag: 5,
        tags: [],
        links: [
          {
            id: 0,
            text: "Kurs do przepracowania",
            link: "https://www.youtube.com/watch?v=RDQGPs7StNA",
          },
          {
            id: 1,
            text: "Przykładowy zasób",
            link: "https://example.com/resources",
          },
        ],
      },
    ],
  },
];

const updateCard = (state, id, patch) =>
  state.map((list) =>
    list.cards.some((card) => card.id === id)
      ? {
          ...list,
          cards: list.cards.map((card) =>
            card.id === id ? { ...card, ...patch } : card,
          ),
        }
      : list,
  );
const listsReducer = (state = initialState, action) => {
  const p = action.payload;
  switch (action.type) {
    case CONSTANS.ADD_LIST:
      return p.title.trim()
        ? [...state, { id: p.id, title: p.title.trim(), cards: [] }]
        : state;
    case CONSTANS.CHANGE_LIST_TITLE:
      return p.newTitle.trim()
        ? state.map((list) =>
            list.id === p.listID ? { ...list, title: p.newTitle.trim() } : list,
          )
        : state;
    case CONSTANS.ADD_CARD:
      return p.text.trim()
        ? state.map((list) =>
            list.id === p.listID
              ? {
                  ...list,
                  cards: [
                    ...list.cards,
                    {
                      id: p.id,
                      title: p.text.trim(),
                      description: "",
                      priorityTag: "",
                      tags: [],
                      links: [],
                    },
                  ],
                }
              : list,
          )
        : state;
    case CONSTANS.DRAG_HAPPEND: {
      const {
        droppableIdStart: from,
        droppableIdEnd: to,
        droppableIndexStart: start,
        droppableIndexEnd: end,
        type,
      } = p;
      if (
        !Number.isInteger(start) ||
        !Number.isInteger(end) ||
        start < 0 ||
        end < 0
      )
        return state;
      if (type === "list") {
        if (start >= state.length || end >= state.length) return state;
        const next = [...state];
        const [item] = next.splice(start, 1);
        next.splice(end, 0, item);
        return next;
      }
      const source = state.find((list) => String(list.id) === from),
        target = state.find((list) => String(list.id) === to);
      if (
        !source ||
        !target ||
        start >= source.cards.length ||
        end > target.cards.length
      )
        return state;
      const sourceCards = [...source.cards];
      const [card] = sourceCards.splice(start, 1);
      const targetCards = source === target ? sourceCards : [...target.cards];
      targetCards.splice(end, 0, card);
      return state.map((list) =>
        list === source
          ? { ...list, cards: sourceCards }
          : list === target
            ? { ...list, cards: targetCards }
            : list,
      );
    }
    case CONSTANS.SET_PRIORIT_TAG:
      return updateCard(state, p.cardID, { priorityTag: p.name });
    case CONSTANS.SET_TAGS:
      return updateCard(state, p.cardID, { tags: [...p.tags] });
    case CONSTANS.CHANGE_CARD_DESCRIPTION:
      return updateCard(state, p.cardID, { description: p.newDescription });
    default:
      return state;
  }
};
export default listsReducer;
