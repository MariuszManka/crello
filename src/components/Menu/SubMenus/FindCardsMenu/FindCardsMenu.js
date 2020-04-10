import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Icon from '../../../Icon/Icon'
import { SearchWrapper, StyledTextField, } from './StyledFindCards'
import { connect } from 'react-redux'
import { useState } from 'react'
import { ListItem, CardContent, Card, Typography, CardHeader } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
   title: {
      fontSize: 14,
   },
})


function FindCardsMenu({ cards, lists }) {


   const classes = useStyles()

   const [findedCards, setFindedCards] = useState([])

   const handleOnInput = (value) => {

      console.log(lists.map(list => console.log(list)))
      const allCards = []

      cards.map(item => item.map(i => {
         allCards.push(i.text)
      }))

      setFindedCards(allCards.filter(card => card.toLowerCase().includes(value.toLowerCase())))
   }

   return (
      <div >
         <Toolbar>
            <SearchWrapper>
               <StyledTextField
                  placeholder="Search"
                  onChange={(e) => {
                     handleOnInput(e.target.value)
                  }}
               />
               <Icon name="search" search />
            </SearchWrapper>
         </Toolbar>
         {
            findedCards.map((card, index) => {
               return (
                  <ListItem key={index}>
                     <Typography className={classes.title}>
                        {/* <CardHeader title="Tytuł"></CardHeader> */}
                        <Card>
                           <CardContent>
                              {card}
                           </CardContent>
                        </Card>
                     </Typography>
                  </ListItem>
               )
            })
         }
      </div>
   )
}

const mapStateToProps = state => ({
   cards: state.lists.map(list => list.cards),
   lists: state.lists
})

export default connect(mapStateToProps)(FindCardsMenu) 