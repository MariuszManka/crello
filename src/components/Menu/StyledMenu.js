import styled from 'styled-components'
import { List } from '@material-ui/core'

export const StyledMenu = styled.div`
   position:fixed;
   right: 0;
   bottom: 0;
   top: ${({ theme }) => theme.sizes.topbar};
   z-index: 100;
   transform: translateX(230px); /**Większe menu jest ukryte poza ekranem */
   transition: transform .3s cubic-bezier(0.42, 0, 0.1, 1.51);
   width:${({ theme }) => theme.sizes.menu}; 
   background-color: ${({ theme }) => theme.colors.listBackground};

& span{
   font-size: 18px;
}

   &  i{
      font-size: 35px;
      color:${({ theme }) => theme.colors.menuIcon};
   } 

   ${({ open }) => open && `
      transform: translateX(30px); 
         &  i{
            font-size: 30px;
         } 
   `}

`

export const MenuHeader = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-between;
`

export const MenuTextCenter = styled.div`
    width:100%;
    text-align:center;
`

export const StyledList = styled.div`
   position:absolute;
   bottom: 0;
   left: 0;
   right: 0;
`