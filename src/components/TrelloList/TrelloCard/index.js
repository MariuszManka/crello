import React from 'react'
import { Typography, CardContent } from '@material-ui/core'
import { StyledCard } from './StyledCard'
import { Draggable } from 'react-beautiful-dnd'

export const ListCard = ({ text, id, index }) => {
   return (
      <Draggable draggableId={String(id)} index={index}>
         {
            provided => (
               <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
               >
                  <StyledCard>
                     <CardContent>
                        <Typography color="textSecondary" variant="subtitle1" gutterBottom >
                           {text}
                        </Typography>
                     </CardContent>
                  </StyledCard>
               </div>
            )
         }

      </Draggable>
   )
}