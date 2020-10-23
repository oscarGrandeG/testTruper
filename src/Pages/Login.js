import React, { useState } from 'react';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

//Actions
import login from "../Redux/Actions/User";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));

function LoginView(props) {
        const classes = useStyles();
        const [user, setUser] = useState(null);

        const loginForm = (e) => {
            e.preventDefault();
            const userName = document.getElementById("userName").value;
            const password = document.getElementById("password").value;

            props.login({
                userName,
                password,
                isValid: (res) => {
                    setUser(res)
                    if (res) props.history.push('/home')
                },
            })

        } 

        return (
                <form onSubmit={loginForm}>
                    <Grid
                        container
                        spacing={3}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid 
                            item
                            xl={12}
                            xs={12}
                        >

                            <Card className={classes.root}>
                                    <CardContent>
                                        <Typography variant="h3" className={classes.title} gutterBottom>
                                            Iniciar sesion
                                        </Typography>

                                        <TextField
                                            id="userName"
                                            label="User"
                                            style={{ margin: 8 }}
                                            placeholder="User"
                                            
                                            margin="normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="outlined"
                                        />

                                        <TextField
                                            id="password"
                                            label="Password"
                                            style={{ margin: 8 }}
                                            placeholder="Password"
                                            
                                            margin="normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="outlined"
                                            type="password"
                                        />
                                        {
                                            !user && user !== null && (
                                                <Typography variant="h6" className={classes.title} gutterBottom>
                                                    Usuario incorrecto
                                                </Typography>
                                            )
                                        }
                                    </CardContent>
                                    <CardActions>
                                        <Button type="submit" variant="contained" color="primary"> Iniciar sesion </Button>
                                    </CardActions>
                                </Card>
                        </Grid>
                    </Grid>
                </form>
        );
}

const mapDispatchToProps =  {
    login,
  };

export default connect(null, mapDispatchToProps)(LoginView);
