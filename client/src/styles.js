import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '20px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(229,26,76, 1)',
    fontStyle: 'oblic'
  },
  toheading: {
    color: 'rgba(116,108,192)',
    fontStyle: 'bold'
  },
 
  image: {
    marginLeft: '15px',
  },
}));
