import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Join from "./components/Join";
import Utube from "./components/Youtube";
import "./main.css";

const App = () => (
  <Router>
    <Route path="/" exact component={Join} />
    <Route path="/chat" exact component={Chat} />
    <Route path="/utube" exact component={Utube} />
  </Router>
);

export default App;
