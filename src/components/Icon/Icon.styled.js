import styled from 'styled-components'
/**
 * Komponent stylizujacy ikonę
 * @param {Bool} normal - zmienie kolor ikony na domyślny szary - #555
 * @param {Number} md - odpowiedzialny za rozmiar ikonki, domyślnie - 24px
 * @param {Bool} dark - odpowiedzialny za kolor ikonki
 * @param {Bool} light - odpowiedzialny za kolor ikonki
 * @param {Number} rotate - odpowiedzialny za rotację ikony
 */

export const StlyedIcon = styled.i`
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

font-size: ${({ md }) => md && `${md}px`};
cursor: pointer;
color: ${({ theme, color }) => color && theme.colors[color]};
`
