import React from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { connect } from "react-redux";

import GlobalStyles from "./styles/GlobalStyle";
import routes from "./routes";
import theme from "./theme";

import {
  increaseCounter,
  decreaseCounter,
} from "./redux/Counter/counter.actions";

function App(props) {
  const routing = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
    // <div className="App">
    //   <div>Count: {props.count}</div>

    //   <button onClick={() => props.increaseCounter()}>Increase Count</button>

    //   <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
    // </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
