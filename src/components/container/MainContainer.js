import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'
import HeaderBar from './../header/HeaderBar';
import GitHubAPIService from './../../services/github-api-service';
import GitHubItemsList from './../list/GitHubItemsList';

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

function MainContainer() {

    const classes = useStyles();

    const [gitdata, setGitData] = useState([]);

    const handleHotRepoClicked = () => {
        console.log("hot clicked")

        GitHubAPIService.getHotRepositories()
        .then(res => {
            //console.log(res)
            setGitData(res.slice(0,4))
        })
    }

    const handleProlificClicked = () => {
        console.log("prolific clicked")
    }

    return (
        <div >
            <HeaderBar
                hotClicked={handleHotRepoClicked}
                prolificClicked={handleProlificClicked}
            />
            <Grid container justify='center'>
                <GitHubItemsList data={gitdata}/>
            </Grid>
            
        </div>
    )
}

export default MainContainer
