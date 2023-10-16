import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Layout from "../components/layout/Layout";


const NewQuote = () => {
  const history = useHistory()
  const addQuoteHandler = quoteData => {
    console.log(quoteData);
    history.push('/quotes')
    
  }
  return <Layout><QuoteForm onAdd={addQuoteHandler}/> </Layout> 
};

export default NewQuote;
