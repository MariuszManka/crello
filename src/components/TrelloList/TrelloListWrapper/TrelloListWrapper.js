import React from 'react'
import {
   TrelloListWrapper
} from './StyledListWrapper'
import { ListHeading, ListCard } from '../exports'
import ActionButton from '../TrelloActionButton'
import { connect } from 'react-redux'
import { Droppable, Draggable } from 'react-beautiful-dnd'

const TrelloList = ({ lists, }) => {

   return (
      lists.map((list, index) => {
         return (
            <Draggable draggableId={String(list.id)} index={index} key={list.id}>
               {provided => (
                  <TrelloListWrapper
                     {...provided.draggableProps}
                     {...provided.dragHandleProps}
                     ref={provided.innerRef}

                  >
                     <Droppable droppableId={String(list.id)}>
                        {(provided) => (
                           <div
                              {...provided.droppableProps}
                              ref={provided.innerRef}
                           >
                              <ListHeading key={list.id} title={list.title} />
                              {
                                 list.cards.map((card, index) =>
                                    <ListCard
                                       key={card.id}
                                       card={card}
                                       index={index}
                                    />

                                 )
                              }
                              {provided.placeholder}
                              <ActionButton id={list.id} />
                           </div>
                        )
                        }
                     </Droppable>
                  </TrelloListWrapper>
               )
               }

            </Draggable>
         )
      })
   )
}

const mapStateToProps = state => ({
   lists: state.lists,

})

export default connect(mapStateToProps)(TrelloList) 
