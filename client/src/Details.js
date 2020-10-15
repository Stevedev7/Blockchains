
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import Fab from '@material-ui/core/Fab';
import Badge from '@material-ui/core/Badge';
import Paper from '@material-ui/core/Paper';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    boldheader:{
      fontWeight: 700,
      textAlign: 'center',
      fontSize:'32px',
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(5),
  },
  paper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:"space-between",
    alignItems:'',
  },
  paper2: {
    display: 'flex',
    flexDirection: 'row',
  },
  avatar: {
    margin: theme.spacing(1),
  },
  padding: {
    padding: theme.spacing(1),
  },
  mgleft:{
      marginLeft:'30px',
  },
   mgl:{
      marginLeft:'10px',
  },
  font20: {
      fontSize:'20px',
      marginLeft:'10px',
  },
   font21: {
      fontSize:'20px',
      marginLeft:'10px',
       marginRight:'30px',
  },
   bold: {
      fontSize:'20px',
      fontWeight:600
  },
   right: {
      marginRight:'30px',
  },
   mb2: {
    margin: theme.spacing(2,0,1,0),
  },
  mb: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.text.disabled,
  },
  mb1: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.text.primary,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textAlignSubtitle:{
    fontSize:'16px',
    opacity:0.8,
    marginBottom: theme.spacing(1)
  },
  mgaround:{
margin: theme.spacing(0.5)
  },
}));

export default function SignIn() {
  const classes = useStyles();
    const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  return (
      <div>
          <Typography variant="h3" className={classes.boldheader}>
          Start Matching
      </Typography>
      {/* <div className={classes.paper1}>
          <div>user</div>
          <div>matches</div>
      </div> */}
       <div className={classes.paper} >
            <div className={classes.paper2} >
        <Paper className={classes.mgleft}>
            <Typography className={classes.padding} >
                Name
                <AccountCircleIcon className={classes.mgl}/>
            </Typography>
            
        </Paper>
        </div>
        <div className={classes.paper2}>
        <Badge color="secondary" badgeContent={0} showZero className={classes.right}>
        <ThumbsUpDownIcon/>
      </Badge>
        </div>
        </div>
      <Divider variant="middle" className={classes.mb1}/>



    <Container component="main" maxWidth="md">
        <div className={classes.mb2}>
      <Chip className={classes.mgaround} size="small" clickable label="Deletable Primary" color="secondary" onDelete={handleDelete} />
      </div>
      <CssBaseline />
       <Card>
      <CardContent >
        <div className={classes.paper} >
            <div className={classes.paper2} >
        <Typography variant="subtitle1" gutterBottom className={classes.bold}>
            Name
        </Typography>
        <Typography variant="subtitle1" gutterBottom className={classes.font20}>
            topic of interest
        </Typography>
        </div>
        <div className={classes.paper2}>
         <Typography variant="subtitle1" className={classes.bold} gutterBottom>
          Age
        </Typography>
        <Typography variant="subtitle1" gutterBottom className={classes.font21}>
            25
        </Typography>
        <Fab color="primary" size="small" className={classes.fab}>
          <DoneIcon />
        </Fab>
        <Fab color="secondary" size="small" className={classes.fab}>
          <ClearIcon/>
        </Fab>
        </div>
        </div>
        <Divider variant="middle" className={classes.mb} />
        <Typography variant="h6" className={classes.bold} gutterBottom>
          Bio
        </Typography>
        <Typography variant="subtitle1" className={classes.textAlignSubtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum
      </Typography>
      </CardContent>
    </Card>
    </Container>
    </div>
  );
}
