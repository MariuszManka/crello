import styled from 'styled-components'

export const StyledAppGrid = styled.main`
   width: 100%;
   max-height: 100vh;
   /* overflow-x:auto; */
   overflow-y: hidden;
   background-color: ${({ theme }) => theme.colors.primary};
` 