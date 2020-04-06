import React from 'react'
import TrelloList from './TrelloList'
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'
import { sort } from '../actions'
import { theme, StyledAppGrid, StyledPageContent, GlobalStyle } from './globalStyles'
import Menu from './Menu/Menu'
import TopBar from './TopBar/TopBar'
import { Grid } from '@material-ui/core'


const App = ({ lists, dispatch }) => {

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result

    if (!destination)
      return

    if (destination) {
      dispatch(sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      ))
    }
  }

  return (
    <StyledAppGrid >
      <DragDropContext onDragEnd={onDragEnd}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <TopBar />
          <StyledPageContent>
            <TrelloList list={lists} />
            <Menu />
          </StyledPageContent>
        </ThemeProvider>
      </DragDropContext>
    </StyledAppGrid>
  )
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App) 
