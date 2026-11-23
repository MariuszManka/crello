# Crello

Prototyp tablicy Kanban: listy, karty, przeciąganie, opisy, etykiety i wyszukiwanie. Interfejs i komponenty React/Material UI zachowują charakter projektu legacy.

## Uruchomienie

Node.js 24 LTS i npm. Wersję linii Node zapisano w .nvmrc.

```sh
npm ci --ignore-scripts --no-audit --no-fund
npm start
```

Serwer nasłuchuje tylko lokalnie. Projekt nie wymaga sekretów ani pliku .env.

## Weryfikacja

```sh
npm run lint
npm test
npm run build
npm run preview
```

Vite buduje do dist/. Vitest uruchamia testy reducerów oraz przepływ formularza w jsdom. Testy nie zastępują pełnego audytu dostępności. Projekt pozostaje JavaScript — brak bramki TypeScript.

Ostatnia weryfikacja lokalna obejmowała lint, 11 testów, build produkcyjny, audyt zależności npm oraz ręczne przejście głównych interakcji w przeglądarce.

## Dostępność

- Interaktywne karty, nagłówki list, etykiety i kontrolki ikonowe mają semantykę przycisków oraz dostępne nazwy.
- Widoczny focus wspiera obsługę klawiaturą, a animacje respektują `prefers-reduced-motion`.
- Linki otwierane w nowej karcie używają `noopener noreferrer`.
- Przeciąganie elementów pozostaje funkcją dodatkową; podstawowe otwieranie i edycja są dostępne bez myszy.

## Architektura

- src/actions: komendy z identyfikatorami generowanymi przed reducerem.
- src/reducers: niemutujące aktualizacje list, menu i katalogu etykiet.
- src/components: UI; rejestr widoków menu pozostaje poza stanem Redux.
- Karty przechowują identyfikatory etykiet, a wrapper rozwiązuje je z aktualnego katalogu.
- Stan edycji jest lokalny. Wyniki wyszukiwania są wyliczane z bieżących kart.

Migracja zastąpiła CRA/Webpack 4 przez Vite oraz dodała Vitest i jawny ESLint. Zachowano React 16, Redux 4, Material UI 4 i react-beautiful-dnd; te biblioteki wymagają osobnych etapów migracji. Build może ostrzegać o dużym chunku.

## Ograniczenia

Brak backendu, kont, synchronizacji i trwałego zapisu: odświeżenie przywraca dane przykładowe. Archiwum, pliki, kalendarz, członkowie i komentarze zawierają placeholdery. Nie jest to produkcyjny system zespołowy. Prawa do kodu, logo i publicznego udostępniania danych przykładowych wymagają potwierdzenia właściciela; nie dodano domyślnej licencji ani deklaracji autorstwa. Zewnętrzne fonty pobierane są z Google Fonts.
