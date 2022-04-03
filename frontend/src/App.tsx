import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Routes/Home";
import { Helmet } from "react-helmet";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Helmet>
        <title>All About Gis</title>
      </Helmet>
      <Switch>
        <Route path={"/"}>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
