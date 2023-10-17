import QuoteList from "../components/quotes/QuoteList";
import Layout from "../components/layout/Layout";
import useHttp from "../hooks/use-http";
import NoQuotesFound from '../components/quotes/NoQuotesFound'
import { getAllQuotes } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";



const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">
      {error}
    </p>
  }
  if ( status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0) ) {
    return <NoQuotesFound/>
  }
  return (
    <Layout>
      <QuoteList quotes={loadedQuotes} />{" "}
    </Layout>
  );
};

export default AllQuotes;
