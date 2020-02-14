import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 800,
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
    box:{
        display: 'flex',
        flexDirection: 'column'
    }
  }));

function HotRepository(props) {
    const classes = useStyles();
    const nameid = props.details.name+" - ID:"+props.details.id

    return (
        <ListItem alignItems="flex-start" >
        <ListItemAvatar>
          <Avatar alt={props.details.name} src={props.details.avatar_url} />
        </ListItemAvatar>
        <ListItemText
          primary={nameid}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {props.details.description}
              </Typography>
            </React.Fragment>
          }
        />
        <Box className={classes.box}>
        <Typography   
            component="span"
            variant="body2"
            className={classes.inline}
            color="textPrimary">
                <StarIcon />
             {props.details.stars}
        </Typography>
        <Typography   
            component="span"
            variant="body2"
            className={classes.inline}
            color="textPrimary">
             {props.details.created_at}
        </Typography>
        </Box>
       
      </ListItem>
    )
}

export default HotRepository
