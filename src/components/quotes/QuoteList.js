import { Fragment } from 'react';
import { useHistory, useLocation,useRouteMatch } from 'react-router-dom'
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {
  const history = useHistory()
  const location = useLocation()
  const match=useRouteMatch()
  const sortQuotes = (quotes, asending) => {
    return quotes.sort((quotesA, quotesB) => {
      if (asending) {
        return quotesA.id > quotesB.id ? 1 : -1
      } else {
        return (
          quotesA.id < quotesB.id ? 1 : -1
        )
      }
    })
  }
  const queryParams = new URLSearchParams(location.search)
  const sortIsAsending = queryParams.get('sort') === "asc";

  const sortedQuotes = sortQuotes(props.quotes, sortIsAsending)

  const changeSortHandler = () => {

    // history.push('/quotes?sort=' + (sortIsAsending ? "desc" : "asc"))
    history.push({
      pathname:`${match.path}`,
      search: `sort=${sortIsAsending ? "desc" : "asc"}`
    })

  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortHandler}>Sort {sortIsAsending ? "Descending" : "Ascending"} </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
