import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
const NewQuote = () => {
  const history = useHistory()
  const addQuoteHandler = quoteData => {
    console.log(quoteData);
    history.push('/quotes')
    
  }
  return<QuoteForm onAdd={addQuoteHandler}/>
};

export default NewQuote;
