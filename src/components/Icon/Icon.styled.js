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
font-size: ${({ md }) => md && `${md}px`} !important;
cursor: pointer;
color: ${({ theme, color }) => color && theme.colors[color]};
transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

${({ theme, outlined }) => outlined && `
   &:hover{
      padding: 4px 4px 4px 4px;
      border-radius: 3px;
      background: rgba(9,30,66,.08);
   }
`};


`
