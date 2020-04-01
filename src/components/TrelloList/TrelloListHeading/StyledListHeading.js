import styled from 'styled-components'

export const Heading = styled.h1`
   font-weight: normal;
   font-family: ${({ theme }) => theme.fonts.secondary};
   font-size: 16px;
`

export const StyledHeaderWrapper = styled.div`
   display:flex;
   justify-content:space-between;
   align-items: center;
   margin: 0 4px;
`