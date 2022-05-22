import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Routes/Home";
import { Helmet } from "react-helmet";
import Nav from "./Components/Navigation";
import Footer from "./Components/Footer";
import NewGi from "./Routes/Newgi";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Helmet>
        <title>DDobok</title>
        <link rel="icon" href={`${process.env.PUBLIC_URL} / Dobok.ico`} />
        <meta name="keyword" content="도복, gi" />
        <meta property="og:title" content="DDobok" />
        <meta
          name="description"
          property="og:description"
          content="당신에게 어울리는 도복을 골라보세요"
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL} / Dobok.ico`}
        />
      </Helmet>
      <Nav />
      <Switch>
        <Route path={"/newgi"}>
          <NewGi />
        </Route>
        {/* <Route path={"/nav2"}></Route> */}
        <Route path={"/"}>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
