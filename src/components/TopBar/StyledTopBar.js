import styled from 'styled-components'

export const StyledTopBar = styled.nav`
   position: absolute;
   top:0;
   left: 0;
   right: 0;
   height: ${({ theme }) => theme.sizes.topbar};
   background-color: ${({ theme }) => theme.colors.topbarBackground};
`

export const Overlay = styled.div`
   display: grid;
   grid-template-columns: 1fr 3.5fr 1fr;
   grid-template-rows: ${({ theme }) => theme.sizes.topbar};
   grid-template-areas: "search logo icons";
   width:100%;
   height: 100%;
   background-color: ${({ theme }) => theme.colors.topbarOverlay};
`

export const StyledSearch = styled.div`
   grid-area: search;
   align-self: center;
   justify-self: center;
`

export const StyledTopBarIcons = styled.div`
   grid-area: icons;
   align-self: center;
   justify-self: center;
   display:flex;
   justify-content: space-around;
   align-items: center
`

export const StyledLogo = styled.img`
   grid-area: logo;
   align-self: center;
   justify-self: center;
   height:40px;
`