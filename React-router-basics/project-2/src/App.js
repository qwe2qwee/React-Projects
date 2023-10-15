import {
  Route,
  Switch,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import NewQuote from "./pages/NewQuote";
import AllQuotes from "./pages/AllQuotes";
import QuoteDeatail from "./pages/QuoteDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes/:qId'>
          <QuoteDeatail />
        </Route>
        <Route path='/quotes'>
          <AllQuotes />
        </Route>
        <Route path='/new-quote'>
          <NewQuote />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
