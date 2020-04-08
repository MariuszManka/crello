import styled from 'styled-components'

export const StyledTrelloList = styled.section`
   display:flex;
   margin: 0 25px 15px 25px;
   width: 80vw;
   `

export const StyledListContent = styled.div`
   position: relative;
   width: calc(85vw - ${({ theme }) => theme.sizes.menu});
   top: ${({ theme }) => theme.sizes.topbar};
   margin-right: ${({ theme }) => theme.sizes.menu};
`