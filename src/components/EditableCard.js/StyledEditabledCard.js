import styled from 'styled-components'
import { TextareaAutosize, Button, Card } from '@material-ui/core'

export const StyledTextArea = styled(TextareaAutosize)`
   resize: none;
   width: 100%;
   height:100%;
   padding: 10px;
   border: none;
   font-family: ${({ theme }) => theme.fonts.primary};
   line-height: 1.6;
   box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
   `
export const StyledButton = styled.button`
  padding: 15px 5px;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  transition: color 0.1s ease-in-out;
  
  &:hover{
      color: ${({ theme }) => theme.colors.primary};
   }
`

export const ButtonWrapper = styled.div`
   display:flex;
   justify-content: space-between;
   align-items:center;
`

export const StyledCard = styled(Card)`
   background-color: transparent !important;
   box-shadow: none !important;
   cursor: pointer;
`