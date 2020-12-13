
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    marginTop : 8,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  clo:{
    color: 'rgba(229,26,76, 1)',
    fontStyle: 200,
  },
  fileInput: {
    width: '97%',
    margin: '13px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));
