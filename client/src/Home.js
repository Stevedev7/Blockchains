import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';

const topicofinterest = [
  {
    value: 'love',
    label: 'love',
  },
  {
    value: 'tech',
    label: 'tech',
  },
  {
    value: 'BTS',
    label: 'BTS',
  },
  {
    value: 'Anime',
    label: 'Anime',
  },
];
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
  const [values, setValues] = useState({
		name: "",
    age:'',
		email: "",
		bio: "",
		error: "",
		success: false,
	});

	const { name, email, age,bio, error, success } = values;
const [topic, setTopic] = useState('');
const handleChange = (name) => (event) => {
		setValues({ ...values, error: false, [name]: event.target.value });
	};
const handleTopic = (event) => {
    setTopic(event.target.value);
  };
  const handleDelete = () => {
    setTopic('');
  };
  // const onSubmit = async (event) => {
	// 	event.preventDefault();
	// 	setValues({ ...values, error: false });
	// 	try {
	// 		const data = await signup({ name, email, password });
	// 		if (data.error) {
	// 			setValues({ ...values, error: data.error, success: false });
	// 		} else {
	// 			setValues({
	// 				...values,
	// 				name: "",
	// 				email: "",
	// 				bio: "",
  //         age: "",
	// 				error: "",
	// 				success: true,
	// 			});
	// 		}
	// 	} catch {
	// 		console.log("error in signup");
	// 	}
	// };
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
          <TextField id="text" fullWidth label="First Name" className={classes.mt} onChange={handleChange("name")} value={name}/>
          <TextField id="number" fullWidth label="Age" className={classes.mt} onChange={handleChange("age")} value={age}/>
          {topic && <Chip className={classes.mgaround} size="small" clickable label={topic} color="secondary" onDelete={handleDelete} />}
          <TextField
          id="standard-select-topic"
          select
          fullWidth
          value={topic}
          onChange={handleTopic}
          helperText="Please select your interests"
        >
          {topicofinterest.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          <TextField id="text" fullWidth label="bio" className={classes.mt} onChange={handleChange("bio")} value={bio}/>
          <TextField id="email" fullWidth label="Email Address" className={classes.mt} onChange={handleChange("email")} value={email}/>
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
            // onClick={onSubmit} 
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