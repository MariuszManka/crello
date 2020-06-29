import { TextField, } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

export const AddTagsField = withStyles({
   root: {
      width: '100%',
      '& .MuiOutlinedInput-root ': {
         '& input': {
            fontSize: '14px',
            padding: '12px 14px'
         },
         '& fieldset': {
            fontSize: '15px'
         },
      },
      '& .MuiInputLabel-root.MuiFormLabel-root ': {
         fontSize: '15px',
      },

      '& .MuiFormHelperText-root': {
         fontSize: '12px'
      }
   },
})(TextField)