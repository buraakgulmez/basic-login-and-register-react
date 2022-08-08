import React from "react";
import { Button, Container, TextField, } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import validationSchema from './validations-register';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import InputAdornment from '@mui/material/InputAdornment';


// import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Register() {
  const theme = createTheme();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    onSubmit: values => {
      console.log(values);
    },
    validationSchema,
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  // autoComplete="given-name"
                  required
                  fullWidth
                  name="firstName"
                  id="firstName"
                  label="First Name"
                  autoComplete="First Name"
                  autoFocus
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastname"
                  label="Last Name"
                  name="lastName"
                  autoComplete="last Name"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                // required
                // fullWidth
                // id="lastName"
                // label="Last Name"
                // name="lastName"
                // value={values.lastName}
                />
              </Grid>
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
              {/* <Grid item xs={12}>
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
              </Grid> */}
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
                        < RemoveRedEyeOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                {errors.password && touched.password && (
                  <div className="error">{errors.password}</div>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="passwordConfirm"
                  label="passwordConfirm"
                  type="password"
                  id="passwordConfirm"
                  autoComplete="new-password"
                  variant="outlined"
                  value={values.passwordConfirm}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="medium"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        < RemoveRedEyeOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                // autoComplete="Confirm-Password"
                // type="passwordConfirm"
                // id="confirmPassword"
                // label="Confirm Password"
                // variant="outlined"
                // size="medium"
                // name='passwordConfirm'
                // value={values.passwordConfirm}
                // onChange={handleChange}
                // onBlur={handleBlur}
                // required
                // fullWidth
                />
                {errors.passwordConfirm && touched.passwordConfirm && (<div className='error' >{errors.passwordConfirm}</div>)}
              </Grid>
            </Grid>
            <br />
            <Grid container justifyContent="flex-end">
            </Grid>
            <Grid>
              <Stack spacing={2}>
                <Button type="submit" variant="outlined">
                  Register
                </Button>
                <Link to="/">
                  <Button
                    type="Login"
                    variant="outlined"
                    fullWidth >
                    Login
                  </Button>
                </Link>
              </Stack>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider >
  );
}

//     <div>
//       <div className="container">
//         <div className="frame">
//           <h2 className="title">Register</h2>
//           <div>
//             <div onSubmit={handleSubmit} className="inputs">
//               <TextField
//                 id="outlined-basic"
//                 label="FirstName"
//                 name="firstname"
//                 variant="outlined"
//                 size="medium"
//                 value={values.firstname}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.firstname && touched.firstname &&
//                 (
//                   <div className="error" >{errors.firstname}</div>
//                 )}
//               <TextField
//                 id="outlined-basic"
//                 label="LastName"
//                 name="lastname"
//                 variant="outlined"
//                 size="medium"
//                 value={values.lastname}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 style={{ marginTop: "10px" }}
//               />
//               <TextField
//                 id="outlined-basic"
//                 label="email"
//                 name="email"
//                 variant="outlined"
//                 size="medium"
//                 value={values.email}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 style={{ marginTop: "10px" }}
//               />
//               {errors.email && touched.email && (
//                 <div className="error">{errors.email}</div>
//               )}
//               <TextField
//                 id="outlined-basic"
//                 label="Password"
//                 name="password"
//                 variant="outlined"
//                 value={values.password}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 size="medium"
//                 style={{ marginTop: "10px" }}
//               />
//               {errors.password && touched.password && (
//                 <div className="error">{errors.password}</div>
//               )}
//               <TextField id="outlined-basic" label="Confirm Password" variant="outlined" size="medium"
//                 name='passwordConfirm'
//                 value={values.passwordConfirm}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 style={{ marginTop: "10px" }}
//               />
//               {errors.passwordConfirm && touched.passwordConfirm && (<div className='error' >{errors.passwordConfirm}</div>)}
//             </div>
//             <div className="button">
//               <Stack spacing={2}>
//                 <Button type="submit" variant="outlined">
//                   Register
//                 </Button>
//                 <Link to="/">
//                   <Button type="Login" variant="outlined">
//                     Login
//                   </Button>
//                 </Link>
//               </Stack>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Register;
