import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

// Material helpers
import { ThemeProvider } from "@material-ui/styles";

// Theme
import theme from "./theme";

// Styles
import "./assets/scss/index.scss";

import Routes from "./Routes";

// Browser history
const browserHistory = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
