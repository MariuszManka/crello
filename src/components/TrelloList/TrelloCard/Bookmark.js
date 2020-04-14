import React from 'react'
import { connect } from 'react-redux'
import { StyledBookmark } from './StyledCard'
import { Tooltip } from '@material-ui/core'


const Bookmark = ({ tagMenu, tag }) => {

   const [tagColor] = [...tagMenu.tags.filter(item => item.name === tag)]


   return (
      <Tooltip title={<p style={{ fontSize: '12px', }}>{tag}</p>} arrow>
         <StyledBookmark color={tagColor && tagColor.color} />
      </Tooltip>
   )
}


const mapStateToProps = state => ({
   tagMenu: state.subMenu.tagsMenu
})


export default connect(mapStateToProps)(Bookmark)
