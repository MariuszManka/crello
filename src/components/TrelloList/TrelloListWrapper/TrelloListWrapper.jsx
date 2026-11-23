import React from 'react'
import { CardGlobalContext } from '../CardContext'
import {
   TrelloListWrapper
} from './StyledListWrapper'
import { ListHeading, ListCard } from '../exports'
import ActionButton from '../TrelloActionButton'
import { connect } from 'react-redux'
import { Droppable, Draggable } from 'react-beautiful-dnd'





const TrelloList = ({ lists, tags }) => {

   return (
      lists.map((list, index) => {
         return (
            <Draggable draggableId={String(list.id)} index={index} key={list.id}>
               {draggableProvided => (
                  <TrelloListWrapper
                     {...draggableProvided.draggableProps}
                     ref={draggableProvided.innerRef}
                  >
                     <Droppable droppableId={String(list.id)}>
                        {(droppableProvided) => (
                           <div
                              {...droppableProvided.droppableProps}
                              ref={droppableProvided.innerRef}
                           >
                              <ListHeading key={list.id} listID={list.id} title={list.title} dragHandleProps={draggableProvided.dragHandleProps} />
                              {
                                 list.cards.map((card, index) =>
                                    <CardGlobalContext.Provider key={card.id}
                                       value={{
                                          card: {...card, tags: card.tags.map(id => tags.find(tag => tag.id === id)).filter(Boolean)},
                                          tags
                                       }}>
                                       <ListCard
                                          key={card.id}
                                          index={index}
                                       />
                                    </CardGlobalContext.Provider>
                                 )}
                              {droppableProvided.placeholder}
                              <ActionButton id={list.id} />
                           </div>
                        )}
                     </Droppable>
                  </TrelloListWrapper>
               )}
            </Draggable>
         )
      }))
}

const mapStateToProps = state => ({
   tags: state.subMenu.tagsMenu.tags,
   lists: state.lists,

})

export default connect(mapStateToProps)(TrelloList) 
