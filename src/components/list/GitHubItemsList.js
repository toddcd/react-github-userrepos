import React , {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ProlificUser from './ProlificUser';
import HotRepository from './HotRepository';
import sample from './../../sample'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 800,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));


export default function GitHubItemsList(props) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
     {props.data.map(item => {
      return <Fragment key={item.id}>
        <HotRepository details={item}/>
        <Divider variant="inset" component="li" />
      </Fragment>
         })}
    </List>
  );
}