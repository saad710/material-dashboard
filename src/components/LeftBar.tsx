import React from 'react';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListIcon from '@mui/icons-material/List';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import SettingsIcon from '@mui/icons-material/Settings';
import StorefrontIcon from '@mui/icons-material/Storefront';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme : any) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));


const LeftBar = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
        <div className={classes.item}>
          <HomeIcon className={classes.icon} />
          <Typography className={classes.text}>Homepage</Typography>
        </div>
        <div className={classes.item}>
          <PersonIcon className={classes.icon} />
          <Typography className={classes.text}>Friends</Typography>
        </div>
        <div className={classes.item}>
          <ListIcon className={classes.icon} />
          <Typography className={classes.text}>Lists</Typography>
        </div>
        <div className={classes.item}>
          <PhotoCameraIcon className={classes.icon} />
          <Typography className={classes.text}>Camera</Typography>
        </div>
        <div className={classes.item}>
          <PlayCircleOutlineIcon className={classes.icon} />
          <Typography className={classes.text}>Videos</Typography>
        </div>
        <div className={classes.item}>
          <TabletMacIcon className={classes.icon} />
          <Typography className={classes.text}>Apps</Typography>
        </div>
        <div className={classes.item}>
          <BookmarkIcon className={classes.icon} />
          <Typography className={classes.text}>Collections</Typography>
        </div>
        <div className={classes.item}>
          <StorefrontIcon className={classes.icon} />
          <Typography className={classes.text}>Market Place</Typography>
        </div>
        <div className={classes.item}>
          <SettingsIcon className={classes.icon} />
          <Typography className={classes.text}>Settings</Typography>
        </div>
        <div className={classes.item}>
          <ExitToAppIcon className={classes.icon} />
          <Typography className={classes.text}>Logout</Typography>
        </div>
      </Container>
    );
};

export default LeftBar;