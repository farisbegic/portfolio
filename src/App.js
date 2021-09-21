import React from "react";
import { Navbar, Main, Education, Projects, Technologies, Contact } from "./components";
import { BrowserRouter as Router} from 'react-router-dom';
import GlobalStyle from "./globalStyles";
import { Scrollbars } from "react-custom-scrollbars";

function App() {
  return (
    <Router>
      <Scrollbars style={{height: "100vh"}}>
        <GlobalStyle />
        <Navbar />
        <Main />
        <Education />
        <Projects />
        <Technologies />
        <Contact />
      </Scrollbars>
    </Router>
  );
}

export default App;
