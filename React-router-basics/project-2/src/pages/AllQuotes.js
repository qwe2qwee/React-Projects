import QuoteList from "../components/quotes/QuoteList";
import Layout from "../components/layout/Layout";

const DUMMY_QUOTES = [
  { id: "q1", author: "hossin", text: "I love learning newthings" },
  {
    id: "q2",
    author: "hossin simo",
    text: "I love learning from reading books",
  },
];

const AllQuotes = () => {
  return (
    <Layout>
      <QuoteList quotes={DUMMY_QUOTES} />{" "}
    </Layout>
  );
};

export default AllQuotes;
