import { Route, Redirect } from "react-router-dom";
import Welcome from "./pages/welcome";
import Products from "./pages/Products";
import MainHead from "./components/home";
import ProductDetail from "./pages/ProductDetail";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <>
      <MainHead />
      <main>
        <Switch>
          <Route exact path='/' > 
          <Redirect to="/welcome"/>
          </Route>
          <Route path='/welcome'>
            <Welcome />
          </Route>
          <Route path='/Products' exact>
            <Products />
          </Route>
          <Route path='/Products/:productId'>
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
