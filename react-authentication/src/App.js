import { Switch, Route } from "react-router-dom";
import { useContext } from "react";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";
import { Redirect } from "react-router-dom/cjs/react-router-dom";

function App() {
  const Ctx = useContext(AuthContext);
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {!Ctx.isLoggedIn && (
          <Route path='/auth'>
            <AuthPage />
          </Route>
        )}

        <Route path='/profile'>
          {Ctx.isLoggedIn && <UserProfile />}
          {!Ctx.isLoggedIn && <Redirect to='/auth' />}
        </Route>

        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
