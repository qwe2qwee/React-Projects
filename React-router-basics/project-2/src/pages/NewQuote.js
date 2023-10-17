import { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Layout from "../components/layout/Layout";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();
  useEffect(()=>{

    if (status === 'completed') {
      history.push('/quotes')
    }
  },[status,history])
  const addQuoteHandler = (quoteData) => {
   sendRequest(quoteData)
  
  };
  return (
    <Layout>
      <QuoteForm isLoading={status==='pending'} onAdd={addQuoteHandler} />{" "}
    </Layout>
  );
};

export default NewQuote;
