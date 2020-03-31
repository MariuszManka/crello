import React from 'react'
import TrelloList from './TrelloList'
import GlobalStyle from './globalStyles/globalStyles'
import theme from './globalStyles/ThemeProvider'
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'
import { sort } from '../actions'


const App = ({ lists, dispatch }) => {

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result

    if (!destination)
      return

    if (destination) {
      dispatch(sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      ))
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <TrelloList list={lists} />
      </ThemeProvider>
    </DragDropContext>
  )
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App) 
