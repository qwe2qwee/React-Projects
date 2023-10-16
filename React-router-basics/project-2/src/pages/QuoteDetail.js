import { useParams, Route } from "react-router-dom/cjs/react-router-dom.min";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Layout from "../components/layout/Layout";
const DUMMY_QUOTES = [
  { id: "q1", author: "hossin", text: "I love learning newthings" },
  {
    id: "q2",
    author: "hossin simo",
    text: "I love learning from reading books",
  },
];

const QuoteDeatail = () => {
  const pramas = useParams();
  const path = "/quotes/" + pramas.qId + "/comment";
  const quote = DUMMY_QUOTES.find((q) => q.id === pramas.qId);

  if (!quote) {
    return <p>No quote found!</p>;
  }
  return (
    <Layout>
      <HighlightedQuote text={quote.text} author={quote.author} />

      <Route path={path}>
        <Comments />
      </Route>
    </Layout>
  );
};

export default QuoteDeatail;
