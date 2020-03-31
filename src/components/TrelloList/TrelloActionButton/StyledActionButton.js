import styled from 'styled-components'
import { TextareaAutosize, Button } from '@material-ui/core'

export const StyledButtonWrapper = styled.div`
   display:flex;
   justify-content:flex-start;
   align-items:center;
   color: ${({ theme }) => theme.colors.buttonAction};
   height:100%;
   min-width:250px; 
   padding: 0 5px;
   border-radius: 4px;

   & > p{
      margin: 10px;
   }

   ${({ list }) => list && `
      background-color: hsla(0,0%,100%,.24);
   `}
`

export const StyledTextArea = styled(TextareaAutosize)`
   resize: none;
   width: 100%;
   padding: 5px;
   outline: none;
   border: none;
   min-height:${({ cardheight }) => `${cardheight}px`};

   `

export const StyledOptionWrapper = styled.div`
      display:flex;
      justify-content: space-between;
      align-items:center;
      height:100%;
      flex-grow: 1;      
   `

export const StyledAddButton = styled(Button)`
      background-color: ${({ theme }) => theme.colors.primary} !important;
      color: #fff !important;
      margin: 15px 0 !important;
   `

export const FormWrapper = styled.div`
      display: flex;
      flex-direction: column;
      justify-content:stretch;
      align-items: stretch;
      height: 100%;
      min-height: 32px;
      padding: 5px;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colors.listBackground};
   `