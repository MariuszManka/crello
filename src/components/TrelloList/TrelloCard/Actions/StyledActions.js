import styled from 'styled-components'
import Icon from '../../../Icon/Icon'
import { Menu } from '@material-ui/core'

export const Tag = styled.div`
   height:25px;
   width: 180px;
   border-radius: 5px;
   cursor: pointer;
   background-color: ${({ color }) => color};
   margin:5px;
`
export const TagsWrapper = styled.div`
   display:flex;
   justify-content:space-between;
   align-items: center;
   margin: 5px 10px ;

   & i{
      margin: 0 5px;
      transition: color .15s ease-in;
      &:hover{
         color: ${({ theme }) => theme.colors.primary};
         transform: scale(1.1);
      }
   }
`

export const StyledHeading = styled.div`
   font-size:20px;
   margin-bottom: 25px;
   padding-bottom: 10px;
   text-align:left;
   border-bottom: 1px solid ${({ theme }) => theme.colors.cardContentHover};
`

export const StyledMenu = styled(Menu)`

& ul{
      min-width: 310px !important;
      max-height: 450px;
      position:relative !important;
      border: 1px solid #d3d4d5 !important;
      font-size: 20px !important;
      padding: 10px 10px !important;
      overflow-y: auto !important;
      }
    
`
export const CloseIcon = styled.div`
   position:absolute;
   top: 8px; 
   right: 8px;
   z-index: 100;
`

export const Paragraph = styled.p`
font-size: 13px;
text-align: ${({ align }) => align ? align : 'left'};

`