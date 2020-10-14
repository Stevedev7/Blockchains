import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  boldheader:{
      fontWeight: 700,
      textAlign: 'center',
      fontSize:'32px',
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(5),
  },
  boldheader2:{
      fontWeight: 600,
      fontSize:'24px',
      marginBottom: theme.spacing(1),
       marginTop: theme.spacing(5),
  },
  textAlignSubtitle:{
    textAlign: 'center',
    fontSize:'19px',
    opacity:0.8,
    marginBottom: theme.spacing(1)
  },
   textAlignSubtitle2:{
    fontSize:'16px',
    opacity:0.8,
    marginBottom: theme.spacing(1)
  },
  mt: {
    marginBottom: theme.spacing(2),
  },
//   avatar: {
//     backgroundColor: theme.palette.secondary.main,
//   },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 4,0),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
        <Typography variant="h3" className={classes.boldheader}>
        CRYPTO MATCH
      </Typography>
      <Typography variant="subtitle1" className={classes.textAlignSubtitle}>
        Blind, secure, and multi-purpose match making
      </Typography>
         <Typography variant="h4" className={classes.boldheader2}>
        Get Started
      </Typography>
      <Typography variant="subtitle1" className={classes.textAlignSubtitle2}>
       Enter your basic Information to match with people of similar interest
      </Typography>
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          {/* <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          /> */}
          <TextField id="text" fullWidth label="First Name" className={classes.mt}/>
          <TextField id="number" fullWidth label="Age" className={classes.mt} />
          <TextField id="text" fullWidth label="bio" className={classes.mt}/>
          <TextField id="email" fullWidth label="Email Address" className={classes.mt}/>
          {/* <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoComplete="current-password"
          /> */}
          {/* <TextField name="password"
            label="Password"
            type="password"
            id="password"
            fullWidth /> */}
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Typography variant="subtitle1" gutterBottom>
        Note:
      </Typography>
          <Typography variant="subtitle2" gutterBottom>
        (The accounts will be cleared regularly for security purposes so this is a one
time submission. Enter details carefully)
      </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit Details
          </Button>
          {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
    </Container>
  );
}