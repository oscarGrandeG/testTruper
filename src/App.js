import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ThemeProvider,
  withStyles,
} from '@material-ui/core/styles';
import { Provider } from "react-redux";
import CssBaseline from '@material-ui/core/CssBaseline';

// Redux
import store from "./Redux";

//Components
import Home from "./Pages/Home";
import Login from "./Pages/Login";

//Styles
import styles from "./App.styles";
import theme from "./Styles/theme";

function App(props) {
  const { classes } = props;
  return (
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <CssBaseline />
            <Switch>
              <Route exact path="/" component={Login}/>
              <Route exact path="/home" component={Home}/>
            </Switch>
          </div>
        </ThemeProvider>
      </Provider>
    </Router>
  );
}

export default withStyles(styles)(App);
