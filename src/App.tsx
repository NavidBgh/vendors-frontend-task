import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoutes, routes } from "./utils/routes";

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route: any, index: number) =>
          route.private ? (
            <PrivateRoutes {...route} key={index} />
          ) : (
            <Route {...route} key={index} />
          )
        )}
      </Switch>
    </Router>
  );
};

export default App;