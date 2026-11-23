import styled from 'styled-components'

export const Heading = styled.button`
   font-weight: normal;
   font-family: ${({ theme }) => theme.fonts.secondary};
   font-size: 16px;
   border: 0;
   background: transparent;
   text-align: left;
   padding: 4px;

   &:focus-visible {
      outline: 3px solid ${({ theme }) => theme.colors.primary};
      outline-offset: 2px;
   }
`

export const StyledHeaderWrapper = styled.div`
   display:flex;
   justify-content:space-between;
   align-items: center;
   margin: 0 4px;
`

export const DragHandle = styled.div`
   display: flex;
   padding: 4px;
   border-radius: 3px;

   &:focus-visible {
      outline: 3px solid ${({ theme }) => theme.colors.primary};
      outline-offset: 2px;
   }
`
