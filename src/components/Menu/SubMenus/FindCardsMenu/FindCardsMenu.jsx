import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Icon from '../../../Icon/Icon'
import { SearchWrapper, StyledTextField} from './StyledFindCards'
import { connect } from 'react-redux'
import { useState } from 'react'
import { ListItem, CardContent, Card, Typography, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles({
   title: {
      fontSize: 14,
   },
})

export const Search = ({ handleChange, placeholder }) => {
   return (
      <Toolbar>
         <SearchWrapper>
            <StyledTextField
               autoFocus
               placeholder={placeholder}
               inputProps={{ "aria-label": placeholder }}
               onChange={(e) => {
                  handleChange(e.target.value)
               }}
            />
            <Icon name="search" search />
         </SearchWrapper>
      </Toolbar>
   )
}


function FindCardsMenu({ cards }) {
   const classes = useStyles()

   const [query, setQuery] = useState('')
   const findedCards = query ? cards.flat().filter(card => card.title.toLowerCase().includes(query.toLowerCase())) : []
   const handleOnInput = setQuery
   return (
      <div >
         <Search handleChange={handleOnInput} placeholder="Szukaj" />
         <Divider />
         <ListItem /> {/*Placeholder*/}
         {
            findedCards.map((card, index) => {
               return (
                  <ListItem key={card.id}>
                     <Card>
                        <CardContent>
                           <Typography className={classes.title}>
                              {card}
                           </Typography>
                        </CardContent>
                     </Card>
                  </ListItem>
               )
            })
         }
      </div>
   )
}

const mapStateToProps = state => ({
   cards: state.lists.map(list => list.cards),
})

export default connect(mapStateToProps)(FindCardsMenu) 