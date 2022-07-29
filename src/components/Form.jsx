import React, { useState } from "react";
import {
  Avatar,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  makeStyles,
  Container
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useForm } from "react-hook-form";
import SendingData from "./SendingData";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        sagiWebsite
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  }
}));

export default function SignIn() {
  const classes = useStyles();
  const [data, setData] = useState({});
  const [confirm, setConfirm] = useState(false);
  const [name, setName] = useState("");

  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur" //best option
  });
  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value });
    setConfirm(false);
    if (event.target.name === "userName") {
      setName(event.target.value);
      console.log(event.target.value);
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          id="form"
          className={classes.form}
          noValidate
          onSubmit={handleSubmit((data) => {
            alert(JSON.stringify(data));
            setConfirm(true);
            document.getElementById("form").style.display="none"
          })}
        >
          <TextField
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            inputRef={register({
              required: "You must provide the email address!",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "You must provide a valid email address!"
              }
            })}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          {errors.email && <div>{errors.email.message}</div>}
          <TextField
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            inputRef={register({
              required: "You must provide a password.",
              minLength: {
                value: 6,
                message: "Your password must be greater than 6 characters"
              }
            })}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {errors.password && <div>{errors.password.message}</div>}
          <TextField
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            inputRef={register({
              required: "You must provide a name.",
              pattern: {
                value: /^[a-z  A-Z\u0590-\u05fe]*$/,
                message: "Your name should contain only letters!"
              },
              maxLength: {
                value: 12,
                message: "Your password must be Less than 12 characters"
              }
            })}
            required
            fullWidth
            id="userName"
            label="user name"
            name="userName"
            autoComplete="username"
          />
          {errors.userName && <div>{errors.userName.message}</div>}
          <TextField
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            inputRef={register({
              required: "You must provide a age.",
              pattern: {
                value: /^(?:1[01][0-9]|120|1[6-9]|[2-9][0-9])$/,
                message: "Your age must be between 16 and 120!"
              }
            })}
            required
            fullWidth
            id="age"
            label="age"
            name="age"
            autoComplete="age"
          />
          {errors.age && <div>{errors.age.message}</div>}
          <TextField
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            inputRef={register({
              required: "You must provide a Favorite animal.",
              pattern: {
                value: /^[a-z  A-Z\u0590-\u05fe]*$/,
                message: "Your animal name should contain only letters!"
              }
            })}
            required
            fullWidth
            id="animal"
            label="animal"
            name="animal"
            autoComplete="favorite-animal"
          />
          {errors.animal && <div>{errors.animal.message}</div>}
          <FormControlLabel
            control={
              <Checkbox
                inputRef={register}
                color="primary"
                defaultValue={false}
                name="remember"
              />
            }
            label="Remember me"
          />

          <Grid container>
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
          </Grid>
          <SendingData data={data} confirm={confirm} name={name} />
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
