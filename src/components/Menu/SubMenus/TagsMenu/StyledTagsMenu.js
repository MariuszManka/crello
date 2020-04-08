
import styled from 'styled-components'
import {
   ChromePicker
} from 'react-color'
import { TextField, Button } from '@material-ui/core'

export const Tag = styled.div`
   width:85%;
   margin: 0 15px 0 auto;
   height: 25px;
   border-radius: 7px;
   background-color: ${({ background }) => background};
   cursor: pointer;

   ${({ addTag, theme }) => addTag && `
       background-color: transparent;
       border: 1px dashed ${theme.colors.topbarBackground};
       display:flex;
       justify-content: center;
       align-items:center;
       text-align: center;
       padding: 15px 8px;
       margin-right: 30px;
   `};

`

export const StyledColorPicker = styled(ChromePicker)`
   margin: 25px  auto 0 auto !important;

   ${({ theme, error }) => error && `
      border: 1px solid ${theme.colors.error};
   `};
`

export const StyledWrapper = styled.div`
   height: 100%;
   display:flex;
   flex-direction:column;
`

export const StyledTextField = styled(TextField)`
width: 100% !important;
& input{
   font-size: 15px !important;
}

`

export const StyledButton = styled(Button)`
   font-size: 15px !important;
`
export const ButtonWrapper = styled.div`
   display:flex;
   justify-content:space-between;
   margin: 20px 0 15px 0;

`