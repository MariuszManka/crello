import React, { useRef, useState } from 'react'
import { Menu, MenuItem, Typography, Input, TextField, } from '@material-ui/core'
import { connect } from 'react-redux'
import { changeListTitle } from '../../actions'

const initialState = {
   mouseX: null,
   mouseY: null,
}

function ContextMenu({ children, isOpen, setOpen, dispatch, title }) {

   const [state, setState] = useState(initialState)
   const [value, setValue] = useState('')
   const inputRef = useRef(null)

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

   const handleEdit = () => {
      setOpen(true)
      setState(initialState)
   }
   return (
      <div onContextMenu={handleClick} style={{ cursor: 'context-menu' }} >
         <div >
            {
               isOpen ?
                  <Input
                     onChange={handleChange}
                     onKeyDown={handleEnter}
                     onBlur={handleBlur}
                  // ref={inputRef}
                  // autoFocus={true}
                  /> :
                  children
            }

         </div>
         <Menu
            keepMounted
            open={state.mouseY !== null}
            // onClose={handleClose}
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