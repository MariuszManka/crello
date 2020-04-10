import React from 'react'
import { Typography, CardContent } from '@material-ui/core'
import { StyledCard } from './StyledCard'
import { Draggable } from 'react-beautiful-dnd'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
   title: {
      fontSize: 14,
   },

})


export const ListCard = ({ text, id, index }) => {

   const classes = useStyles()
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
                        <Typography className={classes.title} color="textSecondary" variant="subtitle1" gutterBottom >
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