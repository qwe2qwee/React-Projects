import {
  useParams,
  Route,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom.min";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom/cjs/react-router-dom";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDeatail = () => {
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);
  const match = useRouteMatch();
  const pramas = useParams();
  const path = `${match.path}/comment`;
  const { qId } = pramas;

  useEffect(() => {
    sendRequest(qId);
  }, [sendRequest, qId]);

  if (status === "pending") {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return<p className="centered">{error}</p>
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }
  return (
    <Layout>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={`${match.path}`} exact>
        <div className='centered'>
          <Link to={`${match.url}/comment`} className='btn--flat'>
            Load Commtents
          </Link>
        </div>
      </Route>

      <Route path={path}>
        <Comments />
      </Route>
    </Layout>
  );
};

export default QuoteDeatail;
