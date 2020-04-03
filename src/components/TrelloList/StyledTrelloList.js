import styled from 'styled-components'

export const StyledTrelloList = styled.section`
   display:flex;
   margin: 65px 25px 15px 25px;
   z-index: 10;
   padding-right:100px;
   width: 100%;
   `

export const StyledListContent = styled.div`
   position: absolute;
   bottom: 0;
   top: ${({ theme }) => theme.sizes.topbar};
   width: 85vw;
   margin-right: ${({ theme }) => theme.sizes.menu};
   /* overflow-x:auto; */
   `