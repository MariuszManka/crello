import React, { useRef, useState } from 'react'
import { Menu, MenuItem, } from '@material-ui/core'
import { connect } from 'react-redux'
import { changeListTitle } from '../../actions'
import { StyledInput } from './StyledContextMenu'

const initialState = {
   mouseX: null,
   mouseY: null,
}

const Input = ({ setOpen, title, dispatch }) => {
   const [value, setValue] = useState(title)

   const handleChange = (e) => {
      setValue(e.target.value)
   }

   const handleEnter = (e, type) => {
      if (e.key === 'Enter' && value) {
         dispatch(changeListTitle(title, value))
         setOpen(false)
      }
   }

   const handleBlur = () => {
      if (value) {
         dispatch(changeListTitle(title, value))
         setOpen(false)
      }

      if (!value) {
         setOpen(false)
      }
   }

   return (
      <StyledInput
         variant="outlined"
         onChange={handleChange}
         onKeyDown={handleEnter}
         onBlur={handleBlur}
         fullWidth
         value={value}
         borderColor="#227EA7"

      />
   )
}

function ContextMenu({ children, isOpen, setOpen, dispatch, title }) {

   const [state, setState] = useState(initialState)

   const handleClick = (e) => {
      e.preventDefault()
      setState({
         mouseX: e.clientX - 2,
         mouseY: e.clientY - 4,
      })
   }

   const handleClose = () => {
      setState(initialState)
   }

   const handleEdit = () => {
      setOpen(true)
      setState(initialState)
   }
   return (
      <div onContextMenu={handleClick} style={{ cursor: 'context-menu' }} >
         <div >
            {
               isOpen ?
                  <Input dispatch={dispatch} setOpen={setOpen} title={title} />
                  :
                  children
            }

         </div>
         <Menu
            keepMounted
            open={state.mouseY !== null}
            onClose={handleClose}
            anchorReference="anchorPosition"
            anchorPosition={
               state.mouseY !== null && state.mouseX !== null
                  ? { top: state.mouseY, left: state.mouseX }
                  : undefined
            }
         >
            <MenuItem onClick={handleClose}>Kopiuj</MenuItem>
            <MenuItem onClick={handleEdit}>Edytuj</MenuItem>
         </Menu>
      </div >
   )
}

export default connect()(ContextMenu)