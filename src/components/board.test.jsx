import React from "react";
import { describe, it, expect, afterEach, vi } from "vitest";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../reducers";
import App from "./App";
afterEach(cleanup);
describe("board interactions", () => {
  it("adds a card through a form and keeps its draft on blur", () => {
    const store = createStore(reducer);
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    fireEvent.click(screen.getAllByText("Dodaj kolejną kartę")[0]);
    const input = screen.getByPlaceholderText("Dodaj treść karty...");
    fireEvent.change(input, { target: { value: "Regression card" } });
    fireEvent.blur(input);
    expect(screen.getByDisplayValue("Regression card")).toBeTruthy();
    fireEvent.submit(input.closest("form"));
    expect(
      store
        .getState()
        .lists[0].cards.some((c) => c.title === "Regression card"),
    ).toBe(true);
  });
});

it('does not save a tag edit when Escape closes the dialog', () => {
 const store = createStore(reducer)
 render(<Provider store={store}><App /></Provider>)
 fireEvent.click(screen.getByText('Etykiety', {exact:true}))
 fireEvent.click(screen.getAllByText('create', {exact:true})[0])
 fireEvent.change(screen.getByDisplayValue('Do zrobienia'), {target:{value:'Discarded'}})
 fireEvent.keyDown(screen.getByRole('dialog'), {key:'Escape',code:'Escape',keyCode:27})
 expect(store.getState().subMenu.tagsMenu.tags[0].name).toBe('Do zrobienia')
})

// Canvas painting belongs to react-color; this suite verifies our dialog state.
vi.mock('react-color', () => ({ ChromePicker: () => <div aria-label="Color picker test double" /> }))
