import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import validationSchema from "./validations";
import { Link } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function Login() {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      console.log(values);
    },
    validationSchema,
  });
  return (
    <div>
      <div className="container">
        <div className="frame">
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            {/* <Box
              component="div"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            > */}
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <div className="error">{errors.email}</div>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    variant="outlined"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    size="medium"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <RemoveRedEyeOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  {errors.password && touched.password && (
                    <div className="error">{errors.password}</div>
                  )}
                </Grid>
              </Grid>
              {/* <TextField
                  id="outlined-basic"
                  label="Mail *"
                  variant="outlined"
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <div className="error">{errors.email}</div>
                )}
                <TextField
                  type="password"
                  id="password"
                  label="Password *"
                  variant="outlined"
                  name='password'
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        < RemoveRedEyeOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                {errors.password && touched.password && (
                  <div className="error">{errors.password}</div>
                )} */}
            </Box>

            <div className='button'>
              <Stack spacing={2}>
                <Button type='Login' variant="outlined">Login</Button>
                <Link to="/Register">
                  <Button
                    type="Register"
                    variant="outlined"
                    fullWidth>
                    Register
                  </Button>
                </Link>
              </Stack>
            </div>
          </form>
        </div>
      </div >
    </div >
  );
}

export default Login;
