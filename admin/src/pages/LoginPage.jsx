import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, Box, Typography, Paper, Checkbox, FormControlLabel, TextField, CssBaseline, IconButton, InputAdornment, CircularProgress, Backdrop } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import bgpic from "../assets/designlogin.jpg";
import { LightPurpleButton } from '../Component/ButtonStyles';
import styled from 'styled-components';
import Cookies from "universal-cookie";


// import { loginUser } from '../redux/userRelated/userHandle';
// import Popup from '../components/Popup';

const defaultTheme = createTheme();


const LoginPage = () => {
    const cookies = new Cookies();

    // const dispatch = useDispatch()
    const navigate = useNavigate()

    // const { status, currentUser, response, error, currentRole } = useSelector(state => state.user);;

    const [toggle, setToggle] = useState(false)
    const [guestLoader, setGuestLoader] = useState(false)
    const [loader, setLoader] = useState(false)
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");

    // const [emailError, setEmailError] = useState(false);
    // const [passwordError, setPasswordError] = useState(false);
    // const [rollNumberError, setRollNumberError] = useState(false);
    // const [studentNameError, setStudentNameError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch("http://localhost:5000/api/adminLogin", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });
      
          if (result.status === 200) {
            result = await result.json();
            cookies.set("user", JSON.stringify(result.data));
             window.location.href = "/AdminDashboard";
            console.log("hello");
          } else {
            // result=await result.json()
      
            setError("login failed");
            setInterval(() => {
              setError("");
            }, 5000);
          }
        }
   
    const handleInputChange = (event) => {
       
        // const { name } = event.target;
        // if (name === 'email') setEmailError(false);
        // if (name === 'password') setPasswordError(false);
        // if (name === 'rollNumber') setRollNumberError(false);
        // if (name === 'studentName') setStudentNameError(false);
    };

    // const guestModeHandler = () => {
    //     const password = "zxc"

    //     if (role === "Admin") {
    //         const email = "yogendra@12"
    //         const fields = { email, password }
    //         setGuestLoader(true)
    //         dispatch(loginUser(fields, role))
    //     }
    //     else if (role === "Student") {
    //         const rollNum = "1"
    //         const studentName = "Dipesh Awasthi"
    //         const fields = { rollNum, studentName, password }
    //         setGuestLoader(true)
    //         dispatch(loginUser(fields, role))
    //     }
    //     else if (role === "Teacher") {
    //         const email = "tony@12"
    //         const fields = { email, password }
    //         setGuestLoader(true)
    //         dispatch(loginUser(fields, role))
    //     }
    // }

    // useEffect(() => {
    //     if (status === 'success' || currentUser !== null) {
    //         if (currentRole === 'Admin') {
    //             navigate('/Admin/dashboard');
    //         }
    //         else if (currentRole === 'Student') {
    //             navigate('/Student/dashboard');
    //         } else if (currentRole === 'Teacher') {
    //             navigate('/Teacher/dashboard');
    //         }
    //     }
    //     else if (status === 'failed') {
    //         setMessage(response)
    //         setShowPopup(true)
    //         setLoader(false)
    //     }
    //     else if (status === 'error') {
    //         setMessage("Network Error")
    //         setShowPopup(true)
    //         setLoader(false)
    //         setGuestLoader(false)
    //     }
    // }, [status, currentRole, navigate, error, response, currentUser]);

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="h4" sx={{ mb: 2, color: "#2c2143" }}>
                             Admin  Login
                        </Typography>
                        <Typography variant="h7">
                            Welcome back! Please enter your details
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
                           
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Enter your email"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    // error={emailError}
                                    // helperText={emailError && 'Email is required'}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type={toggle ? 'text' : 'password'}
                                id="password"
                                autoComplete="current-password"
                                // error={passwordError}
                                // helperText={passwordError && 'Password is required'}
                                  onChange = {(e) =>setPassword(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => setToggle(!toggle)}>
                                                {toggle ? (
                                                    <Visibility />
                                                ) : (
                                                    <VisibilityOff />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <StyledLink href="#">
                                    Forgot password?
                                </StyledLink>
                            </Grid>
                            <LightPurpleButton
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3 }}
                            >
                                {loader ?
                                    <CircularProgress size={24} color="inherit" />
                                    : "Login"}
                            </LightPurpleButton>
                            <Button
                                fullWidth
                                
                                variant="outlined"
                                sx={{ mt: 2, mb: 3, color: "#7f56da", borderColor: "#7f56da" }}
                            >
                                Login as Guest
                            </Button>
                            {/* {role === "Admin" && */}
                                <Grid container>
                                    <Grid>
                                        Don't have an account?
                                    </Grid>
                                    <Grid item sx={{ ml: 2 }}>
                                        <StyledLink to="/Adminregister">
                                            Sign up
                                        </StyledLink>
                                    </Grid>
                                </Grid>
                            
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(${bgpic})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            </Grid>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={guestLoader}
            >
                <CircularProgress color="primary" />
                Please Wait
            </Backdrop>
            {/* <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} /> */}
        </ThemeProvider>
    );
}

export default LoginPage

const StyledLink = styled(Link)`
  margin-top: 9px;
  text-decoration: none;
  color: #7f56da;
`;
