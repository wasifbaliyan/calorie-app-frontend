import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import CalorieCounter from "./pages/CalorieCounter/CalorieCounter";
import CalorieData from "./pages/CalorieData/CalorieData";
import "./App.css";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/user-calorie-data">
          <CalorieData />
        </Route>
        <Route exact path="/counter">
          <CalorieCounter />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
