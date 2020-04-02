import React from 'react'
import TrelloList from './TrelloList'
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'
import { sort } from '../actions'
import { theme, StyledAppGrid, GlobalStyle } from './globalStyles'
import Menu from './Menu/Menu'
import TopBar from './TopBar/TopBar'


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
    <DragDropContext onDragEnd={onDragEnd}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StyledAppGrid >
          <TopBar />
          <TrelloList list={lists} />
          <Menu />
        </StyledAppGrid>
      </ThemeProvider>
    </DragDropContext>
  )
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App) 
