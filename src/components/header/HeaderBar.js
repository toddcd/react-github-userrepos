import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function HeaderBar(props) {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <GitHubIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            GitHub
          </Typography>
          <Button onClick={props.hotClicked} color="inherit" id="hot_repo" >  Hot  </Button>
          <Button onClick={props.prolificClicked} color="inherit" id="prolific_users" >Prolific</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}