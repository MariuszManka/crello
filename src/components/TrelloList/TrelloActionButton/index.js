import React, { useState } from 'react'
import Icon from '../../Icon/Icon'
import { StyledButtonWrapper, StyledTextArea, StyledAddButton, StyledOptionWrapper, FormWrapper } from './StyledActionButton'
import { Card } from '@material-ui/core'
import { connect } from 'react-redux'
import { addList, addCard } from '../../../actions'


const Form = ({ list, setOpen, id, dispatch }) => {

   const [value, setValue] = useState('')

   const placeholder = list ? 'Dodaj tytuł listy...' : 'Dodaj treść karty...'
   const buttonTitle = list ? 'Dodaj Listę ' : 'Dodaj kartę'
   const cardHeight = list ? 30 : 80

   const handleAddList = () => {
      if (value)
         dispatch(addList(value))

      return
   }

   const handleAddCard = () => {
      if (value)
         dispatch(addCard(id, value))

      return
   }

   return (
      <FormWrapper>
         <Card style={{ minHeight: cardHeight, minWidth: 250 }}>
            <StyledTextArea
               placeholder={placeholder}
               value={value}
               onBlur={() => setOpen(false)}
               onChange={(e) => setValue(e.target.value)}
               cardHeight={cardHeight}
            />
         </Card>
         <StyledOptionWrapper>
            <StyledAddButton
               variant="contained"
               endIcon={<Icon name="library_add"></Icon>}
               onMouseDown={() => list ? handleAddList() : handleAddCard()}
            >
               {buttonTitle}
            </StyledAddButton>
            <Icon name="close" onClick={() => {
               setOpen(false)
               setValue('')
            }} />
         </StyledOptionWrapper>
      </FormWrapper>
   )
}

const ButtonWrapper = ({ list, setOpen }) => {

   const buttonText = list ? 'Dodaj kolejną listę' : 'Dodaj kolejną kartę'

   return (
      <StyledButtonWrapper onClick={() => setOpen(true)} list={list}>
         <Icon name="add"></Icon>
         <p style={{ cursor: 'pointer' }}>{buttonText}</p>
      </StyledButtonWrapper>
   )
}

const ActionButton = ({ list, id, dispatch }) => {

   const [isOpen, setOpen] = useState(false)

   return (
      isOpen ? <Form setOpen={setOpen} list={list} dispatch={dispatch} id={id} /> : <ButtonWrapper setOpen={setOpen} list={list} />
   )
}


export default connect()(ActionButton) 