import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import { DialogContent, Dialog, List } from '@material-ui/core'

export const StyledDialog = styled(Dialog)`

      & div{
      overflow-y: visible;
      }
`
export const StyledCard = styled(Card)`
   position:relative;
   margin: 5px 0; 
   font-size: 15px;
`

export const StyledBookmark = styled.div`
   position: absolute;
   top:0;
   right:0;
	width: 0;
	height: 0;
	border-top: 40px solid ${({ color }) => color ? color : 'transparent'};
	border-left:40px solid transparent;
`

/**
 * Główny kontener z gridem dla Modala
 */
export const DialogGrid = styled.div` 
  display: grid;
  grid-template-columns: 5fr 2fr;
  grid-template-rows: 60px 4px 1fr 1fr 1fr;
  gap: 0 45px;
  grid-template-areas: "title menuIcon" "divider divider" "description menu" "links menu" "comments menu";
`
/**
 * Kontener z gridem do Contentu
 */
export const StyledContent = styled.div`
   /* min-width: 500px; */
  margin-left: 20px;
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-template-rows: 50px 1fr;
  gap: 1px 1px;
  grid-template-areas: "icon title" ". content";

  & i{
     grid-area:icon;
     align-self:center;
  }

   ${({ description }) => description && 'grid-area: description'};
   ${({ links }) => links && 'grid-area: links'};
   ${({ comments }) => comments && 'grid-area: comments'};
`

export const ContentCard = styled.div`
      padding: 15px 20px;
      border-radius: 4px;
      font-size: 14px;
      text-align:justify;
      background-color: ${({ theme }) => theme.colors.cardContent};
      cursor: pointer;
      transition: background-color .15s ease-out;

      &:hover{
         background-color: ${({ theme }) => theme.colors.cardContentHover};
      }
`

export const Menu = styled(List)`
   grid-area:menu;
   font-size: 13px;
   border-left: 1px dashed ${({ theme }) => theme.colors.cardContent};
`