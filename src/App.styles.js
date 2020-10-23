import theme from "./Styles/theme";

const stylesApp = {
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    // padding: theme.spacing(15, 4),
    background: '#fff',
  },
};

export default stylesApp;