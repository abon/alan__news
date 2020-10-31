
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
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

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{
                backgroundImage: "linear-gradient(to left, #30cfd0 0%, #330867 100%)"

            }}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <img
                        src="https://alan.app/voice/images/previews/preview.jpg"
                        className={classes.alanLogo}
                        style={{ height: 50, borderRadius: 15, marginRight: 5 }}
                        alt="logo"
                    />
                    <Typography variant="h6" className={classes.title}>
                        News
          </Typography>


                </Toolbar>
            </AppBar>

        </div >
    );
}

