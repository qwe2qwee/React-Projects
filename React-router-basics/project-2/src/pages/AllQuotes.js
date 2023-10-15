import QuoteList from"../components/quotes/QuoteList"

const DUMMY_QUOTES = [
  { id: "q1", author: "hossin", text: "I love learning newthings" },
  {
    id: "q2",
    author: "hossin simo",
    text: "I love learning from reading books",
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}/>;
};

export default AllQuotes;
