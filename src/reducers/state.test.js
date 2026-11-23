import { describe, it, expect } from "vitest";
import lists from "./listReducer";
import menu from "./menuReducer";
import tags from "./subMenusReducer";
import {
  addList,
  addCard,
  changeListTitle,
  sort,
  changeCardDescription,
} from "../actions";
const freeze = (value) => {
  Object.values(value).forEach((v) => {
    if (v && typeof v === "object") freeze(v);
  });
  return Object.freeze(value);
};
const board = () =>
  freeze([
    { id: "a", title: "Same", cards: [{ id: "c", description: "before" }] },
    { id: "b", title: "Same", cards: [] },
  ]);
describe("board state", () => {
  it("renames only the list identified by ID", () => {
    const input = board();
    const next = lists(input, changeListTitle("a", "Updated"));
    expect(next.map((l) => l.title)).toEqual(["Updated", "Same"]);
    expect(input[0].title).toBe("Same");
  });
  it("moves cards without changing previous snapshots", () => {
    const input = board();
    const next = lists(input, sort("a", "b", 0, 0, "c", "DEFAULT"));
    expect(next[0].cards).toHaveLength(0);
    expect(next[1].cards[0].id).toBe("c");
    expect(input[0].cards).toHaveLength(1);
  });
  it("ignores invalid drag destinations", () =>
    expect(lists(board(), sort("missing", "b", 0, 0, "c", "DEFAULT"))).toEqual(
      board(),
    ));
  it("replays actions deterministically", () => {
    const action = addList("New");
    expect(lists([], action)).toEqual(lists([], action));
  });
  it("uses separate IDs for cards and lists", () =>
    expect(addList("New").payload.id).not.toBe(addCard("a", "New").payload.id));
  it("rejects blank titles", () =>
    expect(lists([], addList("   "))).toEqual([]));
  it("updates descriptions immutably", () => {
    const input = board();
    expect(
      lists(input, changeCardDescription("after", "c"))[0].cards[0].description,
    ).toBe("after");
    expect(input[0].cards[0].description).toBe("before");
  });
  it("keeps menu state serializable and immutable", () => {
    const input = freeze(menu(undefined, {}));
    const next = menu(input, { type: "SET_MENU_OPEN", payload: true });
    expect(next.open).toBe(true);
    expect(input.open).toBe(false);
    expect(JSON.parse(JSON.stringify(next))).toEqual(next);
  });
  it("edits a tag without mutating its previous version", () => {
    const input = freeze(tags(undefined, {}));
    const next = tags(input, {
      type: "CHANGE_TAG",
      payload: { id: 0, name: "Changed", color: "#000000" },
    });
    expect(next.tagsMenu.tags[0].name).toBe("Changed");
    expect(input.tagsMenu.tags[0].name).not.toBe("Changed");
  });
});
