import styled from 'styled-components'

export const TrelloListWrapper = styled.div`
    margin: 0 8px;
    padding: 2px 15px;
    width: 300px;
    border-radius: 4px 4px 0 0 ;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.listBackground};
`
